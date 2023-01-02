import React, { useContext } from 'react';
import { GlobalState } from './../../GlobalState';
import Loader from 'react-loader-spinner';
import '../styles/newUsers.css';

const NewUsers = () => {
  const state = useContext(GlobalState);
  const values = state.userApi.values[0];
  const loading = state.userApi.loading[0];

  return (
    <div className='new_user'>
      <div className='users-top mt-5'>
        <h2>Newly registered users</h2>
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
            </tr>
          </thead>
          <tbody>
            {values.map((item, index) => {
              const { _id, fullname, email, gender, role } = item;
              return (
                index <= 3 && (
                  <tr key={_id}>
                    <td>{index + 1}</td>
                    <td>{fullname}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>
                      <div className='user-type'>{role}</div>
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
        {loading ? (
          <div className='load'>
            <Loader type='Oval' color='#00B87C' height={34} width={34} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewUsers;
