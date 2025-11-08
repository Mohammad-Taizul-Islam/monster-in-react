import React, { useContext } from "react";

import { Data, Data1 } from "../../App";

const UseContexthook = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h2>
        My name is : {userName} and I'm {age} years old
      </h2>
    </div>
  );
};

export default UseContexthook;
