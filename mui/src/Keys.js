import React, { useState } from 'react';

function Keys() {
  const [list, setList] = useState(['Duke', 'Villanova']);

  const handleAddItem = () => {
    const newList = [...list];

    newList.unshift('Connecticut');

    setList(newList);
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default Keys;