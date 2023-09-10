import React from "react";
const SingleComment = ({ name, message, ago, img }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-2 p-4">
        <img className="w-10 rounded-full self-start" src={img} alt="profile" />
        <div className="border rounded-br-3xl p-2 mr-2 break-all">
          <h6 className="flex items-center justify-start gap-1">
            {name}
            {/* <i className="bx bxs-badge-check bx-sm text-hover-dark"></i> */}
            <span className="">{ago}</span>
          </h6>
          <p className=" text-sm">{message}</p>
        </div>
      </div>
    </>
  );
};
export default SingleComment;
