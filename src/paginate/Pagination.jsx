import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length === 1) return null;

  //   console.log(postsPerPage, totalPosts, paginate, currentPage);
  return (
    <nav>
      <ul className='pagination' style={{ cursor: 'pointer' }}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? 'page-item active' : 'page-item'
            }
          >
            <div onClick={() => paginate(number)} className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
