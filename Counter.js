import React from 'react';
import './style.css';
const Counter = ({ cnt }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter = {cnt}</h2>
    </div>
  );
};

export default Counter;
