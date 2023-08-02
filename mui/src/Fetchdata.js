  import React, { useEffect, useState } from 'react';

  const Fetchdata = () => {
    const [records, setRecords] = useState([]);


    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response =>{
        if(!response.ok){
          console.log("Throw an error");
          return
        };
        return response.json();
      })
      .then(data =>{
        console.log(data)
        setRecords(data)
      })
      .catch(error =>{
        console.loh("error")
      })
    },[])
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
