import React, { useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../styles/enroledCourses.css';
import { GlobalState } from './../../GlobalState';
import Loader from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Pagination from './../../paginate/Pagination';

const EnrolledCourses = () => {
  const [data, setData] = useState('');
  const state = useContext(GlobalState);
  const [courses] = state.courses.courses;
  // const [isAdmin] = state.userApi.admin;
  const [token] = state.token;
  const [callback, setCallback] = state.courses.callback;
  const [loading, setLoading] = state.courses.loading;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // The section of the handlechange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // The section for deleting the courses
  const deleteCourses = async (id, public_id) => {
    Swal.fire({
      title: '<h4>Are you sure you want to delete?</h4>',
      text: 'This action is not reversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const destroyImg = axios.post(
            '/api/destroy',
            { public_id },
            {
              headers: { Authorization: token },
            }
          );
          const deleteCourse = axios.delete(`/api/courses/${id}`, {
            headers: { Authorization: token },
          });

          await destroyImg;
          await deleteCourse;
          setCallback(!callback);
          setLoading(false);
        } catch (err) {
          toast.error(err.response.data.msg);
        }
        Swal.fire('Course', 'Deleted.', 'success');
      }
    });
  };

  // The section for pagination
  // GETTING THE CURRENT COURSES
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  // Filtering section for the search
  const filteredData = currentPosts.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(data)
  );

  return (
    <div className='enrolled-courses'>
      <Toaster position='top-center' reverseOrder={false} />
      {/* <h2>Showing {filteredData.length} courses</h2> */}
      <div className='enrolled-header'>
        <div className='form-group mb-2'>
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

        <div>
          <Link to='/dashboard/create_courses'>
            <button className='btn btn-small'>Create Course</button>
          </Link>
        </div>
      </div>
      <div className='enrolled-center'>
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
            {filteredData.map((item) => {
              const { _id, images, title, topic, type, user } = item;
              if (user === null) return null;
              console.log(item);
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
                  <td>{user.fullname}</td>
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
                    <button
                      className='btn btn-small btn-danger'
                      onClick={() => deleteCourses(_id, images.public_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {loading && (
        <div className='load'>
          <Loader type='Circles' color='#00B87C' height={34} width={34} />
        </div>
      )}

      <div className='d-flex justify-content-center my-5'>
        {filteredData.length === 0 && !loading ? (
          <div className='py-3 px-5 bg-danger text-white text-center'>
            No courses to display
          </div>
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={courses.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;
