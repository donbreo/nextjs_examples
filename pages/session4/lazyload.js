import React, { useState } from "react";
import dynamic from "next/dynamic";

const ParentChild = dynamic(() => import("../session1/parentchild"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [showComponent, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}></button>
      {showComponent && <ParentChild></ParentChild>}
    </div>
  );
}