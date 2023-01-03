import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Comment,
  DeleteForever,
  // Favorite,
  // FavoriteBorder,
} from '@material-ui/icons';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import './SocialDisplay.css';
import SocialComment from './SocialComment';
import { GlobalState } from './../../GlobalState';
import { format } from 'timeago.js';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loading from './../common/Loading';

const SocialDisplay = ({ socket }) => {
  const state = useContext(GlobalState);
  const [data] = state.post.post;
  const [token] = state.token;
  const [user] = state.userApi.user;
  const [callback, setCallback] = state.post.callback;
  const [show, setShow] = useState('');
  const [loading] = state.post.loading;
  const [result, setResult] = useState([]);

  // The section that deletes a post
  const deletePost = async (id, public_id) => {
    Swal.fire({
      title: '<p>Are you sure you want to delete this post?</p>',
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

          const deleteIt = axios.delete(`/api/post/${id}`, {
            headers: {
              Authorization: token,
            },
          });

          await destroyImg;
          await deleteIt;
          setCallback(!callback);
          Swal.fire('Deleted', 'Your post has been deleted.', 'success');
        } catch (err) {
          toast.error(err.response.data.msg);
        }
      }
    });
  };

  // The section that deletes a post without images
  const del = async (id) => {
    try {
      axios.delete(`/api/post/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setCallback(!callback);
    } catch (err) {
      console.log(err);
    }
  };

  const likePost = async (id, postedBy) => {
    socket.emit('sendNotification', {
      senderName: user.fullname,
      receiverName: postedBy.fullname,
    });
    try {
      const res = await axios.put(
        '/api/post/like',
        { postId: id },
        {
          headers: { Authorization: token },
        }
      );
      setResult(res.data);

      data.map((item) => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      });

      setCallback(!callback);
    } catch (err) {
      console.log(err);
    }
  };

  // The unlike
  const unlikePost = async (id) => {
    try {
      const res = await axios.put(
        '/api/post/unlike',
        { postId: id },
        {
          headers: { Authorization: token },
        }
      );
      setResult(res.data);
      data.map((item) => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      });

      // console.log(newData);
      setCallback(!callback);
    } catch (err) {
      console.log(err);
    }
  };

  const handleComment = async (text, postId) => {
    try {
      const res = await axios.post(
        '/api/post/comment',
        { postId, text },
        {
          headers: { Authorization: token },
        }
      );

      setResult(res.data);
      data.map((item) => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      });

      // console.log(newData);
      setCallback(!callback);
    } catch (err) {
      console.log(err);
    }
  };

  if (data.length === 0) return null;

  if (loading) {
    return <Loading />;
  }

  const handleClick = (id) => {
    setShow(id);
  };

  return (
    <div className='card-content'>
      {data.map((item) => {
        const { _id, content, images, postedBy, createdAt } = item;
        // console.log(item);
        if (postedBy === null) return null;
        return (
          <div key={_id} className='social-display'>
            <div className='social-display-top'>
              <div className='display-left'>
                <div className='friends-image'>
                  <img src={postedBy.avatar} alt='' />
                </div>
                <div className='friends-name'>
                  <span>{postedBy.fullname}</span>
                  <br />
                  {format(createdAt)}
                </div>
              </div>

              <div>
                {postedBy._id === user._id && (
                  <div className='display-right'>
                    {images.url ? (
                      <DeleteForever
                        onClick={() => deletePost(_id, images.public_id)}
                        className='more'
                      />
                    ) : (
                      <DeleteForever
                        onClick={() => del(_id)}
                        className='more'
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className='social-display-medium mt-1'>
              <p>{content}</p>
            </div>

            <div className='social-display-bottom'>
              {images.url && (
                <div className='social-display-image'>
                  <img src={images.url} alt='' />
                </div>
              )}

              <div className='social-display-down mt-2 py-2'>
                {/* <div className='display-down-icons'> */}
                <div className='display-down-div'>
                  {item.likes.includes(user._id) ? (
                    <FaThumbsDown
                      onClick={() => unlikePost(_id)}
                      className='down-div-icons mt-1'
                    />
                  ) : (
                    <FaThumbsUp
                      onClick={() => likePost(_id, postedBy)}
                      className='down-div-icons '
                    />
                  )}
                  {item.likes.length} Likes
                </div>
                <div className='display-down-div'>
                  <Comment
                    onClick={() => handleClick(_id)}
                    className='down-div-icons'
                  />
                  {item.comments.length} Comments
                </div>
                {/* </div> */}
              </div>

              {show === _id && (
                <SocialComment
                  handleComment={handleComment}
                  item={item}
                  id={_id}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialDisplay;
