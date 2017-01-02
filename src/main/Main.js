import React from 'react';

const Main = ({ isFetching, data }) => (
  <div>
    <h3>Main</h3>
    <p><em>Our awesome main page!!!</em></p>
    <ul>
    	<li>
    		<b>isFetching - </b>{isFetching.toString()}
    	</li>
    	<li>
    		<b>data.length - </b>{data.length}
    	</li>
    </ul>
  </div>
);

export default Main;