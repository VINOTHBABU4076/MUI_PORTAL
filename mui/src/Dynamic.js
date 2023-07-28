import React, { useState } from 'react';

const Dynamic = () => {
  const [isHighlighted, setIsHighlighted] = useState(true);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  const style = {
    backgroundColor: isHighlighted ? 'green' : 'transparent',
    color: isHighlighted ? 'black' : 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={style} onClick={toggleHighlight}>
     <button>Click me to {isHighlighted ? 'unhighlight' : 'highlight'}</button> 
    </div>
  );
};

export default Dynamic;
