import { useState, useEffect } from 'react';
import axios from 'axios';
const endpoint = process.env.REACT_APP_API;

function CoursesAPI() {
  const [courses, setCourses] = useState([]);
  const [callback, setCallback] = useState(false);
  const [back, setBack] = useState(false);
  const [category, setCategory] = useState('');
  const [topic, setTopic] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.get(
        endpoint + `/api/courses?${category}&${sort}`
      );
      setCourses(res.data['courses']);
      setResult(res.data['result']);
      setLoading(false);
    };
    getCourses();
  }, [callback, category, sort, back]);

  return {
    courses: [courses, setCourses],
    callback: [callback, setCallback],
    category: [category, setCategory],
    topic: [topic, setTopic],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult],
    loading: [loading, setLoading],
    back: [back, setBack],
  };
}

export default CoursesAPI;
