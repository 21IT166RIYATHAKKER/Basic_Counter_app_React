import React, { useState } from 'react';
import Counter from './Counter';
import CntBtns from './CntBtns';
function App() {
  const [cnt, setCount] = useState(0);

  return (
    <div>
       <Counter cnt={cnt} />
     
      <CntBtns
        Increment={() => {
          setCount(cnt + 1);}}
        Decrement={() => {
          setCount(cnt - 1);}}
      />
    </div>
  );
}

export default App;
