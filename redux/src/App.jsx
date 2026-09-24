import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] =  useState(5)
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Decrement
      </button>
      <input type="number" value={num} onChange={(e)=>{
        setNum(e.target.value)
      }}/>
      <button
        onClick={() => {
          dispatch(increamentByAmount(Number(num)));
        }}
      >
        Increament by Amount
      </button>
    </div>
  );
};

export default App;
