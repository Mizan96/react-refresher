import React, { use, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Mizan", age: 20 }); // object example
  const [num, setNum] = useState([10, 20, 30]); // array example

  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="h-50 w-50 bg-blue-900 flex justify-center items-center">
        <h1 className="text-white font-bold text-9xl">{count}</h1>
      </div>
      <div className="text-white flex gap-4 pt-6 pl-2">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-amber-950 p-3 rounded-xl"
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="bg-amber-950 p-3 rounded-xl"
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setCount(count + 5);
          }}
          className="bg-amber-950 p-3 rounded-xl"
        >
          Add by 5
        </button>
      </div>
      <div>
        {user.name}
        <button
          onClick={() => {
            const newUser = { ...user };
            newUser.name = "Md. Mizanur Rahman Khan";
            setUser(newUser);
          }}
          className="bg-amber-950 p-2 m-2 rounded-xl"
        >
          Change User
        </button>
      </div>
      <div>
        {num}
        <button
          onClick={() => {
            const newNum = [...num];
            newNum.push(40);
            setNum(newNum);
          }}
          className="bg-amber-950 p-2 m-2 rounded-xl"
        >
          Add Num
        </button>
      </div>
      <h1>Adding Multiple set Value</h1>
      <button
        onClick={() => {
          // setCount(count+1) // This method doesn't work
          // setCount(count+1)
          // setCount(count+1)
          setCount(x=>x+1) // we need to use arrow funtion to use multiple set functionality
          setCount(x=>x+1)
          setCount(x=>x+1)
        }}
        className="bg-amber-950 p-2 m-2 rounded-xl"
      >
        3 setCount
      </button>
    </div>
  );
};

export default App;
