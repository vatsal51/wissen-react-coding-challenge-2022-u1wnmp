import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('Authorization')?.length === 0) {
    }
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios
        .get('https://reqres.in/api/unknown', {
          headers: {
            'Content-Type': 'text/plain',
            Authorization: localStorage.getItem('Authorization'),
          },
        })
        .then((response) => {
          return response;
        });
      setData(response.data.data);
      console.log(response.data.data.name);
    } catch (error) {
      alert('invalid username or passwords');
    }
  };
  
  return (
    <div>
      <h2>Hello</h2>
      {data.map((d)=>{
        <h2>{d.name}</h2>
      })}
    </div>
  );
};

export default Home;
