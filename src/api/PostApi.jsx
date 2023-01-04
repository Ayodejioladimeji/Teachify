import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const endpoint = process.env.REACT_APP_API;

const PostApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [callback, setCallback] = useState(false);
  const token = localStorage.getItem('token');

  // FETCHING THE POSTS FROM THE DATABASE
  useEffect(() => {
    if (token) {
      const getPosts = async () => {
        try {
          const res = await axios.get(endpoint + '/api/post', {
            headers: {
              Authorization: token,
            },
          });
          setData(res.data.post);
          setLoading(false);
        } catch (err) {
          toast.error(err.message);
        }
      };
      getPosts();
    }
  }, [token, callback]);
  return {
    post: [data, setData],
    loading: [loading, setLoading],
    callback: [callback, setCallback],
  };
};

export default PostApi;
