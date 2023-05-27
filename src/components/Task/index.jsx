import React from "react";

import styles from "./style.module.css";

const Task = ({ label, done, created }) => {
  const textDecoration = {
    textDecoration: done ? "line-through" : "",
    color: done ? "rgba(0,0,0, 0.5)" : "",
  };

  return (
    <>
      <li className={styles.task} style={textDecoration}>
        {label}
        <span className={styles.task__created}>{created}</span>
        <div className={styles.task__right}>
          <button className={styles.task__edit}></button>
          <button className={styles.task__delete}></button>
        </div>
      </li>
    </>
  );
};
export default Task;
