import React, { useState } from "react";

const App = () => {
  const [count, useCount] = useState(0);
  return (
    <div className="h-screen w-screen bg-black">
      <div className="h-50 w-50 bg-blue-900 flex justify-center items-center">
        <h1 className="text-white font-bold text-9xl">{count}</h1>
      </div>
      <div className="text-white flex gap-4 pt-6 pl-2">
        <button
          onClick={() => {
            useCount(count + 1);
          }}
          className="bg-amber-950 p-3 rounded-xl"
        >
          Increase
        </button>
        <button
          onClick={() => {
            useCount(count - 1);
          }}
          className="bg-amber-950 p-3 rounded-xl"
        >
          Decrease
        </button>
        <button
          onClick={() => {
            useCount(count + 5);
          }}
          className="bg-amber-950 p-3 rounded-xl"
        >
          Add by 5
        </button>
      </div>
    </div>
  );
};

export default App;
