import { useState } from "react";
import React from "react";

export default function Index() {
  const [state, setState] = useState({
    value: 0,
    text: "only text",
    digits: "1234",
  });

  const inputHandler = (e) => {
    let regex;
    if (e.target.id === "text") {
      regex = /^[a-zA-Z]+$/;
    }
    if (e.target.id === "digits") {
      regex = /^[0-9]*$/;
    }
    setState((previousValue) => {
      if (e.target.value.match(regex)) {
        return {
          ...previousValue,
          [e.target.id]: e.target.value,
          error: false,
        };
      } else {
        return {
          ...previousValue,
          error: true,
        };
      }
    });
  };
  const buttonHandler = (e) => {
    if (!(state.value == 0 && e === -1))
      setState((previousValue) => {
        return {
          ...previousValue,
          value: previousValue.value + e,
        };
      });
  };

  return (
    <>
      <input id="text" value={state.text} onChange={inputHandler}></input>
      <h1>{`text: ${state.text}`}</h1>

      <input id="digits" value={state.digits} onChange={inputHandler}></input>
      <h1>{`digits: ${state.digits}`}</h1>

      <h1>Value: {state.value}</h1>

      <button onClick={() => buttonHandler(1)}>{`+`}</button>

      <button onClick={() => buttonHandler(-1)}>{`-`}</button>
    </>
  );
}
