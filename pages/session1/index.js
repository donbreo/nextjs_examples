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
              <Link href="/session1/component">{`Components, styling`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session1/parentchild">{`Nesting Components`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session1/props">{`Passing props`}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeading}>{`State Management`}</div>
        <div className={styles.sectionContent}>
          <ul>
            <li className={styles.contentElement}>
              <Link href="/session1/state">{`Controlled components, Synthetic events`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session1/form">{`Form Validation`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session1/debounce">{`Use State effect, example`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session1/ref">{`ref`}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
