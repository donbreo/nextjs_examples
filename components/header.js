import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>NextJs session</title>
      </Head>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div style={{padding:"25px"}}>
            <Image
              src={`/nextjs.png`}
              alt="Picture of the author"
              width={200}
              height={50}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div>
            {/* <Image
              src={`/logo.png`}
              alt="Picture of the author"
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
