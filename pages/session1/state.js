import { useState } from "react";
import React from "react";

export default function Index() {
  const [state, setState] = useState({
    value: 0,
    text: "intitialValue",
  });
  const [text, setText] = useState("intitialValue2");

  return (
    <>
      <h1>{`text: ${state.text}`}</h1>
      <input
        value={state.text}
        onChange={(e) => {
          setText(e.target.value);
          setState((previousValue) => {
            return {
              ...previousValue,
              text: e.target.value,
            };
          });
        }}
      ></input>

      <h1>Value: {state.value}</h1>
      <h1>Text: {text}</h1>

      <button
        onClick={() => {
          setState((previousValue) => {
            return {
              ...previousValue,
              value: previousValue.value + 1,
            };
          });
        }}
      >
        {`+`}
      </button>

      <button
        onClick={() => {
          setState((previousValue) => {
            return {
              ...previousValue,
              value: previousValue.value - 1,
            };
          });
        }}
      >
        {`-`}
      </button>
    </>
  );
}
