import React from "react";
import styles from "./heeader.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>
          <div>
            <Image
              src={`/nextjs.png`}
              alt="Picture of the author"
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div>
            <Image
              src={`/logo.png`}
              alt="Picture of the author"
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}
