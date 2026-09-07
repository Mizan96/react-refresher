import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";
const RightContent = (props) => {
  return (
    <div id='right' className="h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto">
      {props.users.map((user,id)=> {
        return (<RightCard key={id} color={user.color} id={id} img={user.img} intro={user.intro} tag={user.tag} />)
      })}
    </div>
  );
};

export default RightContent;
