import { useState, useEffect } from 'react';
import axios from 'axios';

function CourseAPI() {
  const [courses, setCourses] = useState([]);
  const [callback, setCallback] = useState(false);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const res = await axios.get(`/api/courses`);
      setCourses(res.data['courses']);
      setResult(res.data['result']);
      setLoading(false);
    };
    getCourses();
  }, [callback]);

  return {
    course: [courses, setCourses],
    callback: [callback, setCallback],
    result: [result, setResult],
    loading: [loading, setLoading],
  };
}

export default CourseAPI;
