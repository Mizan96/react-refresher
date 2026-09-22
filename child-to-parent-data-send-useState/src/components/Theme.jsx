import React from "react";

const Theme = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setTheme("dark");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
