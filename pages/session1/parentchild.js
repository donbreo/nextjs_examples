import React from "react";
import ChildContent from "../../components/ChildContent";

export default function Index(props) {
  const ParentContent = (props) => {
    const parentFunction = (e) => {
      console.log("child data::", e);
    };
    return (
      <>
        <div>
          {`This is a div inside the Parent component`}
          <div>
            {`Child is below this text`}
            <ChildContent
              parentFunction={parentFunction}
              index={0}
            ></ChildContent>
            {`Child is above this text ^^^`}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <ParentContent {...props}></ParentContent>
      </div>
    </>
  );
}
