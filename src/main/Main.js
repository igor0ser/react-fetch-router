import React from 'react';

const Main = ({ loading, data }) => (
  <div>
    <h3>Main</h3>
    <p><em>Our awesome main page!!!</em></p>
    <ul>
    	<li>
    		<b>loading - </b>{loading.toString()}
    	</li>
    	<li>
    		<b>data.length - </b>{data.length}
    	</li>
    </ul>
    <ul>
      {data.map((item, i) => (
        <li key={i}>{item.data.title}</li>
      ))}
    </ul>
  </div>
);

export default Main;