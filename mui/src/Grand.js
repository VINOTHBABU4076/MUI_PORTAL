import React, { useContext } from "react";
import MyContext from "./Context";

const Grand = () => {
  const sharedData = useContext(MyContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>{sharedData}</p>
    </div>
  );
};

export default Grand;
