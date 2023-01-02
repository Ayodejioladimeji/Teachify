import React, { useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/enroledCourses.css';
import { GlobalState } from './../../GlobalState';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Pagination from './../../paginate/Pagination';

const EnrolledCourses = () => {
  const [data, setData] = useState('');
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userApi.cart;
  const [token] = state.token;
  const [loading] = state.userApi.loading;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // The section of the handlechange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // ======================================
  const addToCart = async (cart) => {
    await axios.patch(
      '/user/addcart',
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const removeCourse = (id) => {
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
        cart.forEach((item, index) => {
          if (item._id === id) {
            cart.splice(index, 1);
          }
        });

        setCart([...cart]);
        addToCart(cart);
        Swal.fire('Course', 'Deleted.', 'success');
      }
    });
  };

  // The section for pagination
  // GETTING THE CURRENT COURSES
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cart.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  // Filtering section for the search
  const filteredData = currentPosts.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(data)
  );

  return (
    <div className='enrolled-courses'>
      <h2>My Learnings</h2>
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
              <th scope='col'>Id</th>
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
                  <td>{index + 1}</td>
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
                    &nbsp;&nbsp;
                    <button
                      className='btn btn-small btn-danger'
                      onClick={() => removeCourse(_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {loading && (
          <div className='load'>
            <Loader type='Circles' color='#00B87C' height={34} width={34} />
          </div>
        )}
      </div>

      <div className='d-flex justify-content-center my-5'>
        {filteredData.length === 0 && !loading ? (
          <div className='card mx-4'>
            <div className='card-body'>
              <h2 style={{ textAlign: 'center', fontSize: '1rem' }}>
                No course found, Enroll for a course and start learning
              </h2>
            </div>
          </div>
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={cart.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;
