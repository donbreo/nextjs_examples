import React, { useRef } from "react";

export default function Index() {
  //   const inputEl = useRef(null);
  const scrolltoTopRef = useRef(null);
  const array = Array.from(Array(100).keys());

  return (
    <>
      <ul>
        <div ref={scrolltoTopRef}>{`this is the top of the page`}</div>
        {array.map((element, index) => {
          return (
            <li key={index}>{`List Item ${element}  Keep scrolling...`}</li>
          );
        })}
        {/*  <li ref={inputEl}> Go to Top</li> */}
        <button
          onClick={() => {
            scrolltoTopRef?.current?.scrollIntoView();
          }}
        >
          {`back to top`}
        </button>
      </ul>
    </>
  );
}
