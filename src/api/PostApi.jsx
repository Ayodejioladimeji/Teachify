import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const PostApi = (token) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [callback, setCallback] = useState(false);

  // FETCHING THE POSTS FROM THE DATABASE
  useEffect(() => {
    if (token) {
      const getPosts = async () => {
        try {
          const res = await axios.get('/api/post', {
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
