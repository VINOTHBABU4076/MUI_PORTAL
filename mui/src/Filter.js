import React, { useState } from 'react';

const Filter = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const removeItem = (id) => {
    setItems((items) => items.filter((docs) => docs.id !==id));
  };

  return (
    <div>
      <h2>List Component</h2>
      <ul>
        {items.map((docs) => (
          <li key={docs.id}>
            {docs.name}
            <button onClick={() => removeItem(docs.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;

