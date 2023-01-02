import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../styles/enroledCourses.css';
import { GlobalState } from './../../GlobalState';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Pagination from './../../paginate/Pagination';

const MyCourse = () => {
  const [data, setData] = useState('');
  const state = useContext(GlobalState);
  const [course, setCourse] = useState([]);
  const [token] = state.token;
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const getCourse = async () => {
      const res = await axios.get('/api/courses/my_course', {
        headers: { Authorization: token },
      });
      setCourse(res.data);
      setLoading(false);
    };
    getCourse();
  }, [token]);

  // The section of the handlechange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // The section for pagination
  // GETTING THE CURRENT COURSES
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = course.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  // Filtering section for the search
  const filteredData = currentPosts.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(data)
  );

  if (loading) {
    return (
      <div className='load'>
        <Loader type='Circles' color='#00B87C' height={44} width={44} />
      </div>
    );
  }

  return (
    <div className='enrolled-courses'>
      <h2>My Courses</h2>
      <div className='form-group mb-2 enroll-input'>
        <input
          className='form-control'
          type='text'
          placeholder='Search'
          aria-label='Search'
          onChange={handleChange}
          value={data}
          name='search'
        />
      </div>
      <div className='enrolled-center mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Thumbnails</th>
              <th scope='col'>Title</th>
              <th scope='col'>Type</th>
              <th scope='col'>Topic</th>
              <th scope='col'>Author</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              const { _id, images, title, author, topic, type } = item;
              return (
                <tr key={_id}>
                  <td>
                    <div className='table-image'>
                      <img src={images.url} alt='course-pic' />
                    </div>
                  </td>
                  <td>{title}</td>
                  <td>{type}</td>
                  <td>{topic}</td>
                  <td>{author}</td>
                  <td className='d-flex'>
                    <Link id='btn_view' to={`/courses/view/${_id}`}>
                      <button className='btn btn-small btn-primary'>
                        View
                      </button>
                    </Link>
                    <Link id='btn_view' to={`/edit_course/${_id}`}>
                      <button className='btn btn-small btn-success'>
                        Edit
                      </button>
                    </Link>
                    {/* <button
                      className='btn btn-small btn-danger'
                      onClick={() => deleteCourses(_id, images.public_id)}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='d-flex justify-content-center my-5'>
        {filteredData.length === 0 && !loading ? (
          <div className='card mx-4'>
            <div className='card-body'>
              <h2 style={{ textAlign: 'center', fontSize: '1rem' }}>
                No Course Found, Create your course with passion
              </h2>
            </div>
          </div>
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={course.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default MyCourse;
