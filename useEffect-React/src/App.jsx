import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(() => {
    console.log("useEffect is working...");
  }, [num2]);
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
