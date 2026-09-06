import React from "react";
import RigthCardContent from "./RigthCardContent";

const RightCard = (props) => {
  return (
    <div className="shrink-0 h-full w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <RigthCardContent id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  );
};

export default RightCard;
