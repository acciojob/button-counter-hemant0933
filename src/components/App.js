import React, { useState } from "react";
import './../styles/App.css';
import BtnComponent from "./BtnComponent";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
    <BtnComponent count={count} setCount={setCount} />
    </div>
  )
}

export default App
