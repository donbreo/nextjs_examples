import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../../actions/product";

export default function Index() {
  const [apiData, setapiData] = useState(true);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = () => {
    console.log("API Called for:: ");
    getProducts({ text: "sometext" })
      .then((data) => {
        console.log("data ::", data);
        setapiData(data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("error ::", err);
        setisLoading(false);
      });
  };

  useEffect(() => {
    console.log("INIT");
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>{`Loading...`}</div>
      ) : (
        <div>
          <ul>
            {apiData?.data?.products?.map((element, index) => {
              return <li key={index}>{element.title}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
