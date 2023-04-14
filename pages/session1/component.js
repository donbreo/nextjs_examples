import React from "react";
import styles from "./component.module.css";

export default function BasicComponent() {
  return (
    <>
      <div className={styles.headerStyle}>
        {`This is a module style, only available on this page (only size change)`}</div>

      <div className={`headerStyle`}>
        {`This is a global style (border+padding added)`}</div>
      
      <div className={`${styles.headerStyle} headerStyle`}>
        {`This is a mixed style, global + module`}
        
        </div>
      <div
        style={{
          color: "#456",
          padding: "20px",
        }}
        className={`${styles.headerStyle} headerStyle`}
      >{`This is a mixed style, global + module + inline Style`}</div>
    </>
  );
}
