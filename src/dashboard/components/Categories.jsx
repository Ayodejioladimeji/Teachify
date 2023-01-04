import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import '../styles/Categories.css';
import { GlobalState } from './../../GlobalState';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { isEmpty } from '../../utils/Validation';
const endpoint = process.env.REACT_APP_API;

const Categories = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;
  const [callback, setCallback] = state.categories.callback;
  const token = localStorage.getItem('token');
  const [category, setCategory] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState('');

  // The section that creates a category
  const createCategory = async (e) => {
    e.preventDefault();

    if (isEmpty(category))
      return setCategory(category, toast.error('Field cannot be empty'));

    try {
      if (onEdit) {
        const res = await axios.put(
          endpoint + `/api/category/${id}`,
          { name: category },
          {
            headers: { Authorization: token },
          }
        );
        toast.success(res.data.msg);
      } else {
        const res = await axios.post(
          endpoint + '/api/category',
          { name: category },
          {
            headers: { Authorization: token },
          }
        );
        toast.success(res.data.msg);
      }
      setOnEdit(false);
      setCategory('');
      setCallback(!callback);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // the section that edits a category
  const editCategory = async (id, name) => {
    setID(id);
    setCategory(name);
    setOnEdit(true);
  };

  // The section that deletes each category
  const deleteCategory = async (id) => {
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
          await axios.delete(endpoint + `/api/category/${id}`, {
            headers: { Authorization: token },
          });
          Swal.fire('Categories', 'Deleted.', 'success');
          // toast.success(res.data.msg);
          setCallback(!callback);
        } catch (err) {
          toast.error(err.response.data.msg);
        }
      }
    });
  };

  return (
    <div className='categories'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='categories-top'>
        <div className='create'>
          <Toaster position='top-center' reverseOrder={false} />
          <div className='create-center'>
            <h3>Create Category</h3>
            <form onSubmit={createCategory}>
              <div className='col-md-12 categ'>
                <label htmlFor='title' className='form-label'>
                  Category Name
                </label>
                <input
                  type='text'
                  name='category'
                  value={category}
                  className='form-control'
                  id='title'
                  placeholder='e.g Frontend'
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className='col-md-12 mt-4'>
                <button className='btn btn-primary w-100 py-2'>
                  {onEdit ? 'UPDATE CATEGORY' : 'CREATE CATEGORY'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='categories-bottom'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Category Name</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              const { name, _id } = category;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td className='d-flex'>
                    <button
                      className='btn btn-small btn-primary'
                      onClick={() => editCategory(category._id, category.name)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-small btn-danger'
                      onClick={() => deleteCategory(_id)}
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
    </div>
  );
};

export default Categories;
