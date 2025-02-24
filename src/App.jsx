// import { GoodList } from "./components/GoodList";
// import goods from "./goods";

import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      {/* <GoodList goods={goods} /> */}
      <h1>Value is {value} </h1>
      <button
        onClick={() => {
          setValue(1);
          console.log(value);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setValue(2);
          console.log(value);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setValue(3);
          console.log(value);
        }}
      >
        3
      </button>

    </div>
  );
}
