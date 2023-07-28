import React, { useState, useEffect } from 'react';

const Useeffs = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('update value');
  console.log("msg updated:", msg);

  useEffect(() => {
    console.log("render time:", count);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase value</button>
      <p>Value is: {count}</p>
    </div>
  );
};

export default Useeffs;
