import React from 'react';

const Help = ({ data }) => (
  <div>
    <h3>Help</h3>
    <p>If you need help press F1</p>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item.data.title}</li>
        ))}
    </ul>
  </div>
);

export default Help;
