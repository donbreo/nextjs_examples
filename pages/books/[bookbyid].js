import React from "react";
import {useRouter} from "next/router";
// import Booklist from "./booklist";
export default function Index() {
    const router = useRouter()

  return <div>{router.query.bookbyid}</div>;
}
