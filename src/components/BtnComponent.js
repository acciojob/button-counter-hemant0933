import React from 'react';

const BtnComponent = ({count,setCount}) => {
    // const [count, setCount] = useState(1);

  return (
    <div>
       <p>Button clicked {count} times</p><br/><br/>
       <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default BtnComponent;

//done
//done