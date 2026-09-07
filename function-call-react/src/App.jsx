import React from "react";

const App = () => {
  return (
    <div className="body">
      <div className="box">
        <button
          onClick={() => {
            console.log("Button is clicked");
          }}
        >
          Change User
        </button>
      </div>
      <input
        type="text"
        placeholder="Type your name"
        onChange={(x) => {
          document.getElementsByTagName('h1')[0].innerHTML = x.target.value
          
          console.log();
        }}
      />
      <h1>...</h1>
    </div>
  );
};

export default App;
