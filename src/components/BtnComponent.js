import React, { useState } from 'react';

const BtnComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
       <p>Button clicked {count} times</p><br/><br/>
       <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default BtnComponent;
