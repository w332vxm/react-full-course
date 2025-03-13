import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(10);

  const incrementCount = () => {
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
  };
  return (
    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
      <span>Count: {count}</span>
      <button onClick={incrementCount}> + </button>
    </div>
  );
};

export default Index;
