
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, {useState} from "react";
>>>>>>> 44d066a5aa8fb196b508dc27795a74930720e00c
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
<<<<<<< HEAD
  return (
    <div>
      
=======
  
  return (
    <div>
    <p>Button clicked {count} times</p><br/><br/>
    <button onClick={() => setCount(count + 1)}>Click me</button>
>>>>>>> 44d066a5aa8fb196b508dc27795a74930720e00c
    </div>
  )
}

export default App
