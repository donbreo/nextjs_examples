import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../../actions/product";

export default function Index() {
  const [apiData, setapiData] = useState(true);
  const [text, setText] = useState(true);

  const fetchData = () => {
    console.log("API Called for:: ");
    getProducts({ text: "sometext" }).then((data) => {
        console.log('data ::',data)
        setapiData(data)
      })
      .catch((err) => {
        console.log('error ::',err)
      })
  };
  /* debounce function start */
useEffect(()=>{
  console.log("INIT")
},[])

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
        fetchData()
    }, 750);
    return () => {
      console.log("Search value");
      clearTimeout(debouncedSearch);
    };
  }, [text]);
  /* debounce function end */
  return (
    <>
        <input onChange={(e)=>{setText(e.target.value)}}></input>
      <h1>{`Cat Fact:: `}</h1>
      <p>{`${apiData}`}</p>

    </>
  );
}
