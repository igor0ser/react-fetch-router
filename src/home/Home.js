import React from 'react';

const Home = ({ loading, data }) => (
  <div>
    <h3>Home</h3>
    <p><b>Home, sweet home...</b></p>
    <p><sup>loading = </sup>{loading.toString()}</p>
    <p><b>data.length = </b>{data.length}</p>
    <ul>
      {data.map((item, i) => (
        <li key={i}>{item.data.title}</li>
      ))}
    </ul>
  </div>
);

export default Home;