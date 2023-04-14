import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/session4");
    }, 5000);
  }, []);
  return (
    <div>
      <button type="button" onClick={() => router.push("/session4")}>
        {` force redirect`}
      </button>
    </div>
  );
}
