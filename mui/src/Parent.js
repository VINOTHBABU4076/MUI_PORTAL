import React from "react";
import Child from "./Child";
import MyContext from "./Context";

const Parent = () => {

  const sharedData = "Use context Hook ";

  return (
    <div>
      <h1>React Context Example</h1>
      <MyContext.Provider value={sharedData}>
        <Child />
      </MyContext.Provider>
    </div>
  );
};

export default Parent;
