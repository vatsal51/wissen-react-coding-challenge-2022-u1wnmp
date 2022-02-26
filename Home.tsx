import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem('Authorization')?.length === 0) {
      location.href = '/';
    }
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios
        .post('https://reqres.in/api/unknown', {
          headers: {
            'Content-Type': 'text/plain',
            Authorization: localStorage.getItem('Authorization'),
          },
        })
        .then((response) => {
          return response;
        });
      console.log(response.data);
    } catch (error) {
      alert('invalid username or passwords');
    }
  };
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Home;
