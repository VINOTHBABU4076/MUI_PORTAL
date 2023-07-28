import React from 'react';

const Tables = ({ data }) => {
  return (
    <div className='table'>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody> 
        {data.map((item) => (
          <tr key={item.name}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Tables;
