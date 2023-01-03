import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalState } from './../../GlobalState';
import Card from '../card/Card';
import './Courses.css';
import BreadCumb from '../breadcumb/BreadCumb';
import Loading from './../common/Loading';

//

const Courses = () => {
  const [data, setData] = useState('');
  const state = useContext(GlobalState);
  const [courses] = state.courses.courses;
  const [categories] = state.categories.categories;
  const [category, setCategory] = state.courses.category;
  const [sort, setSort] = state.courses.sort;
  const [loading] = state.courses.loading;
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(10);
  const history = useHistory();

  const showItems = () => {
    setLoad(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 5);
      setLoad(false);
    }, 2500);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // The handleChange
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // Filtering section for the search
  const filteredData = courses.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(data)
  );

  return (
    <div className='category'>
      <BreadCumb path={history.location.pathname} title='All Courses' />
      <div className='container-fluid mt-5'>
        <div className='card'>
          <div className='card-header py-3'>
            <div className='form-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
                onChange={handleChange}
                value={data}
                w-100
              />
            </div>

            <div className='form-group'>
              <select
                className='form-select'
                name='category'
                value={category}
                onChange={handleCategory}
              >
                <option defaultValue>Choose Category</option>
                <option>All Categories</option>
                {categories.map((category) => (
                  <option value={'category=' + category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-group'>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className='form-select'
              >
                <option defaultValue>Sort</option>
                <option>Newest</option>
                <option value='sort=oldest'>Oldest</option>
              </select>
            </div>

            <div className='form-group'>
              <p className='mt-3'>Showing {filteredData.length} results</p>
            </div>
          </div>

          <div className='card-body'>
            {filteredData.length === 0 && !loading ? (
              <div className='py-3 bg-danger text-white text-center'>
                Search Not Found
              </div>
            ) : (
              ''
            )}

            <div className='data-center mt-4'>
              {filteredData.slice(0, visible).map((item) => (
                <Card {...item} key={item._id} />
              ))}
            </div>
          </div>
        </div>

        {filteredData.length <= 5 ? (
          ''
        ) : (
          <div className='col-md-12 text-center mt-5'>
            <button onClick={showItems} className='btn btn-primary loadmore'>
              {load ? (
                <div className='d-flex'>
                  <Loading />
                  &nbsp; Loading
                </div>
              ) : (
                'Load more'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
