import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('')
  const formSubmitHandler = () => {
    // e.preventDefault()
    console.log("Form submitted");
  };
  return (
    <div className="h-screen w-screen bg-black text-white">
      <form onSubmit={(e)=> {
        e.preventDefault() // to prevent form from reloading the website
        formSubmitHandler()
      }
      }>
        <input
          className="uppercase p-2 m-2 bg-amber-800"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value) // Two way binding
          }}
        />
        <button className="p-2 m-2 bg-amber-950 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default App;
