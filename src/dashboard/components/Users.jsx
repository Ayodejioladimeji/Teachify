import React, { useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Users.css';
import { Link } from 'react-router-dom';
import { GlobalState } from './../../GlobalState';
import Loader from 'react-loader-spinner';
import Pagination from './../../paginate/Pagination';

const Users = () => {
  const [data, setData] = useState('');
  const state = useContext(GlobalState);
  const [token] = state.token;
  // const [user] = state.userApi.user;
  const [callback, setCallback] = state.userApi.callback;
  const values = state.userApi.values[0];
  const [loading, setLoading] = state.userApi.loading;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // The section of the handlechange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // THE SECTION OF THE HANDLE DELETE
  const handleDelete = async (id) => {
    // if (window.confirm('Do you want to remove this user?')) {
    //   const deleteUser = axios.delete(`/user/delete/${id}`, {
    //     headers: { Authorization: token },
    //   });

    //   await deleteUser;
    //   setCallback(!callback);
    //   setLoading(false);
    // }

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
        const deleteUser = axios.delete(`/user/delete/${id}`, {
          headers: { Authorization: token },
        });

        await deleteUser;
        setCallback(!callback);
        setLoading(false);
        Swal.fire('User', 'Deleted.', 'success');
      }
    });
  };

  // GETTING THE CURRENT COURSES
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = values.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  // Filtering section for the search
  const filteredData = currentPosts.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(data)
  );

  return (
    <>
      <div className='users'>
        <h2>Users information</h2>
        <div className='users-top'>
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
        </div>

        <div className='users-bottom'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Gender</th>
                <th scope='col'>User Type</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
                const { _id, fullname, email, gender, role } = item;
                return (
                  <tr key={_id}>
                    <td>{index + 1}</td>
                    <td>{fullname}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>
                      <div className='user-type'>{role}</div>
                    </td>
                    <td className='users-buttons d-flex'>
                      <Link to={`/dashboard/admin/view_profile/${_id}`}>
                        <button className='btn btn-small btn-primary'>
                          View
                        </button>
                      </Link>
                      {/* <Link to='/dashboard/users/edit_profile'> */}
                      <button className='btn btn-small btn-success'>
                        Edit
                      </button>
                      {/* </Link> */}
                      <button
                        onClick={() => handleDelete(_id)}
                        className='btn btn-small btn-danger'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {loading ? (
            <div className='load'>
              <Loader type='Circles' color='#00B87C' height={34} width={34} />
            </div>
          ) : null}
        </div>
      </div>
      <div className='d-flex justify-content-center my-5'>
        {values.length === 0 && !loading ? (
          <div className='py-3 px-5 bg-danger text-white text-center'>
            No user found
          </div>
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={values.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </>
  );
};

export default Users;
