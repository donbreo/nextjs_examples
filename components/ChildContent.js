import React, { useEffect } from "react";
export default function ChildContent(props) {
  useEffect(() => {
    props.parentFunction("data here");
  }, []);
  return (
    <>
      <div>{`This is a div inside the child component ${props.index}`}</div>
    </>
  );
}
