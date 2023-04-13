import React from "react";
import isMobile from "../../middleware/isMobile";

export default function BasicComponent(props) {
  return (
    <>
      <div>
        {`You are viewing from a ${
          props.isMobile ? "mobile" : "desktop"
        } device`}
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
}
