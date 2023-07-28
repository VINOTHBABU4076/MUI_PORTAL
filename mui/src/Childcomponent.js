import React from 'react';

const ChildComponent = ({ message, onMessageChange }) => {
  const handleChange = (e) => {
    const newMessage = e.target.value;
    onMessageChange(newMessage);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" value={message} onChange={handleChange} />
      <p>Message from Parent: {message}</p>
    </div>
  );
};

export default ChildComponent;
