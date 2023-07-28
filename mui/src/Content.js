// import React from 'react';
import { useState } from 'react';
import React from 'react';

const Content=()=>{
    function handleNamechange(){
        const names=["km","cr","lm"]
        const int=Math.floor(Math.random()*3);
        return(names[int])
    }
    // const[count,setCount]=useState(0);
    // function decrement(){
    //     setCount(count-1);
    // }    
    // function increment(){
    //     setCount(count+1);
    // }
    const arr=[1,2,3,4,-1,-2]
    const items=arr.filter(n => n>=0)
    .map((n) =>({ arr:n}));
      console.log(items); 
    return(
        <main>
            <p> javascript and raect js</p>
            {/* <button> INCREASE </button> */}
            {/* <button onClick={increment}>+ </button>
            <span>{count}</span>
            <button onClick={decrement}> - </button> */}
        </main>
    )
}
export default Content