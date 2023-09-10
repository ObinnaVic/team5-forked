import React from "react";
const Backdrop = (props) =>
  props.show ? (
    <div
      className="w-full h-full absolute left-0 top-0 bottom-0 right-0
  cursor-pointer z-[1]"
      onClick={props.clicked}
    ></div>
  ) : null;

export default Backdrop;
