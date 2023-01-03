import React, { useState, useContext } from 'react';
import { useParams } from 'react-router';
import { GlobalState } from './../../GlobalState';
import Card from '../card/Card';
import './Categories.css';
import BreadCumb from '../breadcumb/BreadCumb';
import Loading from './../common/Loading';

const Categories = () => {
  const [data, setData] = useState('');
  const state = useContext(GlobalState);
  const [course] = state.course.course;
  const [categories] = state.categories.categories;
  const params = useParams();
  const [load, setLoad] = useState(false);
  const [loading] = state.course.loading;
  const [visible, setVisible] = useState(10);

  const showItems = () => {
    setLoad(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 5);
      setLoad(false);
    }, 2500);
  };

  // FILTEEING THE COURSES FOR DIFFERENT CATEGORIES
  const check = course.filter((item) => {
    return item.category === params.id;
  });

  // THE HANDLE CHANGE FOR THE SEARCH
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // Filtering section for the search
  const filteredData = check.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(data)
  );

  // FILTER THE CATEGORIES TO PASS THE PATHNAME
  const bread = categories.filter((item) => {
    return item._id === params.id;
  });

  if (loading) {
    return <Loading />;
  }

  if (bread.length === 0) return null;
  return (
    <div className='category'>
      <BreadCumb path={`/Courses/${bread[0].name}`} title={bread[0].name} />
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
              />
            </div>
            <div className='form-group'>
              <p className='mt-3'>Showing {filteredData.length} results</p>
            </div>
          </div>

          <div className='card-body'>
            {filteredData.length === 0 ? (
              <div className='py-3 bg-danger text-white text-center'>
                Course Not Found
              </div>
            ) : (
              ''
            )}

            <div className='data-center'>
              {filteredData.slice(0, visible).map((item) => (
                <Card {...item} key={item._id} />
              ))}
            </div>
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
                <Loader type='Oval' color='#fff' height={24} width={24} />
                &nbsp; Loading
              </div>
            ) : (
              'Load more'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
