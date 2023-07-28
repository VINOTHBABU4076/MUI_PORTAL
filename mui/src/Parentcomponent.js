import React, { useState } from 'react';
import Childcomponent from './Childcomponent';

const ParentComponent = () => {
  const [messageFromParent, setMessageFromParent] = useState('');

  const handleMessageChange = (message) => {
    setMessageFromParent(message);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Childcomponent
        message={messageFromParent}
        onMessageChange={handleMessageChange}
      />
    </div>
  );
};

export default ParentComponent;
