import React from "react";

const RigthCardContent = (props) => {
  return (
    <div className="p-10 flex flex-col justify-between absolute top-0 left-0 h-full w-full">
      <h2
        className="text-xl font-semibold bg-white rounded-full 
        h-12 w-12 flex justify-center items-center"
      >
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl leading-relaxed text-white mb-14">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white 
            font-semibold px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button
            className="bg-blue-600 text-white 
            font-semibold px-3 py-2 rounded-full"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RigthCardContent;
