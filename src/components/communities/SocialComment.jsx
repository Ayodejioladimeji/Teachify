import React, { useState } from 'react';
import './SocialComment.css';
// import { format } from 'timeago.js';

const SocialComment = ({ id, item, handleComment }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className='shows'>
      <div className='show-comment'>
        {item.comments.map((item) => {
          const { _id, text, postedBy } = item;
          return (
            <div key={_id} className='social-display-comment mt-2'>
              <div className='display-left'>
                <div className='friends-image'>
                  <img src={postedBy.avatar} alt='' />
                </div>
                <div className='friends-name'>
                  <span>{postedBy.fullname}</span>
                  <br />
                  {postedBy.stack}
                  {/* {format(date)} */}
                  {/* {date} */}
                </div>
              </div>
              <p>{text}</p>
            </div>
          );
        })}
      </div>

      <div className='social-display-textfield mt-4'>
        <div className='card-body text-upload'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleComment(input, id);
              setInput('');
            }}
          >
            <input
              className='send-text'
              value={input}
              onChange={handleChange}
              placeholder='Write your comment'
            />
          </form>

          {/* <div className='card-btn py-2'>
            <span className='social-btn w-100 px-3 py-2'> COMMENT</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SocialComment;
