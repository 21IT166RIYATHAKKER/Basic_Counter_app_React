import React from 'react';
import './style.css';
const CntBtns = ({ Increment, Decrement }) => {
 
  return (
    <div>
      <button className="button" onClick={Increment}>Increment</button>
      <button className="button" onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default CntBtns;
