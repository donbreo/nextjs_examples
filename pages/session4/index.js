import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
export default function Index() {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.section}>
        <div className={styles.sectionHeading}>{`Nexts essentials`}</div>
        <div className={styles.sectionContent}>
          <ul>
            <li className={styles.contentElement}>
              <Link href="/session4/useRouter">{`useRouter examples`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session4/config">{`config changes`}</Link>
            </li>
            <li className={styles.contentElement}>
              <Link href="/session4/config">{`Dynamic import`}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
