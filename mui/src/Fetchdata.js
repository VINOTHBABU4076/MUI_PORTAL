import React, { useEffect, useState } from 'react';

const Fetchdata = () => {
  const [records, setRecords] = useState([]);


  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const data = await response.json();
          setRecords(data);
          console.log(data);
        } else {
          console.log('Request failed:', response.status);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
   

    fetchData();
  }, []);

 
  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchdata;
