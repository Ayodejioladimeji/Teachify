import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { toast } from 'react-hot-toast';

const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [callback, setCallback] = useState(false);
  const [cart, setCart] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get('/user/user', {
            headers: { Authorization: token },
          });
          // sessionStorage.setItem('user', JSON.stringify(res.data));

          res.data.role === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
          res.data.role === 'instructor'
            ? setInstructor(true)
            : setInstructor(false);
          setIsLogged(true);
          setCart(res.data.cart);
          setData(res.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }
  }, [token, callback]);

  // THE SECTION THAT FETCHES ALL USERS
  useEffect(() => {
    if (token) {
      const getAll = async () => {
        try {
          const res = await axios.get('/user/all_users', {
            headers: {
              Authorization: token,
            },
          });
          setValues(res.data);
          setLoading(false);
        } catch (err) {
          setValues({ ...values });
        }
      };
      getAll();
    }
    // eslint-disable-next-line
  }, [token, callback]);

  // THE SECTION THAT ADDS THE COURSES TO MYLEARNING
  const addCart = async (course) => {
    if (!isLogged) return toast.error('Please Login to continue');

    const check = cart.every((item) => {
      return item._id !== course._id;
    });

    if (check) {
      setCart([
        ...cart,
        {
          ...course,
          quantity: 1,
        },
      ]);

      await axios.patch(
        '/user/addcart',
        {
          cart: [
            ...cart,
            {
              ...course,
              quantity: 1,
            },
          ],
        },
        {
          headers: { Authorization: token },
        }
      );
    } else {
      toast.error('You have already enrolled to this course');
    }
  };

  // THE SECTION OF THE SOCKET
  useEffect(() => {
    setSocket(io('http://localhost:3000'));
    // setSocket(io('https://teachify.netlify.app'));
  }, []);

  useEffect(() => {
    if (data === undefined) return null;
    socket?.emit('newUser', data.fullname);
  }, [socket, data]);

  return {
    values: [values, setValues],
    user: [data, setData],
    cart: [cart, setCart],
    addCart: addCart,
    isLogged: [isLogged, setIsLogged],
    instructor: [instructor, setInstructor],
    admin: [isAdmin, setIsAdmin],
    loading: [loading, setLoading],
    callback: [callback, setCallback],
    socket,
  };
};

export default UserApi;
