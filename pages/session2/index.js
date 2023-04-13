import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../slices/counterSlice";

export default function Index() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.section}>
        <div
          className={styles.sectionHeading}
        >{`Multi component state management`}</div>
        <div className={styles.sectionContent}>
          <ul>
            <li className={styles.contentElement}>
              <Link href="/session2/reducer">{`Reducer`}</Link>
            </li>
            {/* <li className={styles.contentElement}>
              <Link href="/session2/context">{`Context`}</Link>
            </li> */}
            <li className={styles.contentElement}>
              <Link href="/session2/redux">{`Redux`}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{`The count is ${count}`}</div>
      <div>
        <button onClick={() => dispatch(reset())}>{`reset to zero`}</button>
      </div>
    </div>
  );
}
