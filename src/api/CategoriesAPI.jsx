import { useState, useEffect } from 'react';
import axios from 'axios';
const endpoint = process.env.REACT_APP_API;

function CategoriesAPI() {
  const [categories, setCategories] = useState([]);
  const [callback, setCallback] = useState(false);
  const [categoryloading, setCategoryloading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setCategoryloading(true);
      const res = await axios.get(endpoint + '/api/category');
      setCategories(res.data);
      setCategoryloading(false);
    };

    getCategories();
  }, [callback]);
  return {
    categories: [categories, setCategories],
    callback: [callback, setCallback],
    categoryloading: [categoryloading, setCategoryloading],
  };
}

export default CategoriesAPI;
