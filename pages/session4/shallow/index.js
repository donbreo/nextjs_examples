import React from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          router.push("/session4/shallow/profile", null, { shallow: false })
        }
      >
        {` profile normal`}
      </button>
      <button
        type="button"
        onClick={() =>
          router.push("/session4/shallow/activity", null, { shallow: false })
        }
      >
        {` activity normal`}
      </button>
      <div> {`This is index page`}</div>
    </div>
  );
}
