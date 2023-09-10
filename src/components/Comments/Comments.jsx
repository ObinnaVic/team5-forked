import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

function useChatScroll(dep) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

const Comments = (props) => {
  const ref = useChatScroll(props.messages);
  const { scroll, setScroll } = useGlobalContext();
  useEffect(() => {
    if (scroll) {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
      setScroll(false);
    }
  }, [scroll, ref]);
  return (
    <div
      ref={ref}
      className="overflow-hidden mb-24 overflow-y-scroll w-full max-w-6xl"
    >
      {props.children}
    </div>
  );
};

export default Comments;
