import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
export default function Index() {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.section}>
        <div className={styles.sectionHeading}>{`React core`}</div>
        <div className={styles.sectionContent}>
          <ul>
            <li className={styles.contentElement}>
              <Link href="/session3/layoutexample">{`Layout for page`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session3/productlist">{`Product list`}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
