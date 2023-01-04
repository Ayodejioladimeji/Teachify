import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';
import './Modal.css';
import { Image, Mood } from '@material-ui/icons';
import { GlobalState } from './../../GlobalState';
import { toast, Toaster } from 'react-hot-toast';
import { isEmpty } from './../../utils/Validation';
import Loading from './../common/Loading';

const endpoint = process.env.REACT_APP_API;

const initialState = {
  content: '',
};

const Modal = ({ setOpenModal }) => {
  const [post, setPost] = useState(initialState);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.post.callback;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadin, setLoadin] = useState(false);
  const history = useHistory();
  const [showBox, setShowBox] = useState(false);
  const token = localStorage.getItem('token');

  const { content } = post;

  const openModal = () => {
    // setLoading(true);
    setTimeout(() => {
      setOpenModal(false);
      // setLoading(false);
    }, 1500);
  };

  // The section of the handlechange input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // The section of the handle upload
  const handleUpload = async (e) => {
    // e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) return toast.error('File not exist.');

      if (file.size > 3024 * 3024)
        // 3mb
        return toast.error('Size too large!');

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        // 1mb
        return toast.error('File format is incorrect.');

      let formData = new FormData();
      formData.append('file', file);
      setLoading(true);
      const res = await axios.post(endpoint + '/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
      });
      setImages(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data.msg);
    }
  };

  // The section of the handle destroy
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        endpoint + '/api/destroy',
        { public_id: images['public_id'] },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // The section of the handlesubmie
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(content))
      return setPost({ ...post }, toast.error('Fields cannot be empty'));

    try {
      setLoadin(true);
      // if (!images) return toast.error('No Image Upload');

      await axios.post(
        endpoint + '/api/post',
        { ...post, images },
        {
          headers: { Authorization: token },
        }
      );

      //   console.log(res.data);
      history.push('/social/community');
      setLoadin(false);
      setCallback(!callback);
      toast.success('Posted Created');
      setPost({ post: '' });
      setImages({ images: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const styleUpload = {
    display: images ? 'block' : 'none',
  };

  return (
    <div className='modalBackground'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <h5 className='text-center'>Create Post</h5>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <FaTimesCircle />
          </button>
        </div>

        <div className='modal-body'>
          <div className='modal-home'>
            <form onSubmit={handleSubmit}>
              <div className='textarea-div'>
                <textarea
                  placeholder="What's on your mind?"
                  onChange={handleChangeInput}
                  value={content}
                  name='content'
                />
              </div>

              <div className='d-flex justify-content-between my-2'>
                <div
                  className='add-display'
                  onClick={() => setShowBox(!showBox)}
                >
                  <Image /> Add Images
                </div>
                <div className='add-display'>
                  <Mood /> Feeling/Activity
                </div>
              </div>

              {showBox && (
                <div className='image-box'>
                  <div className='upload'>
                    <input
                      type='file'
                      name='file'
                      id='file_up'
                      onChange={handleUpload}
                    />

                    {loading ? (
                      <div id='file_img'>
                        <div className='load'>
                          <Loading />
                        </div>
                      </div>
                    ) : (
                      <div id='file_img' style={styleUpload}>
                        <img src={images ? images.url : ''} alt='' />
                        <div className='destroy-cancel'>
                          <FaTimes
                            onClick={handleDestroy}
                            className='destroyer'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <button
                onClick={openModal}
                className='btn mt-4 btn-primary w-100'
                disabled={content < 5 && true}
              >
                {loadin ? 'Posting' : 'Post'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
