import React from "react";

import Task from "../Task";

import styles from "./style.module.css";

const TaskList = ({ todos, onDelete }) => {
  const PreText = () => {
    return (
      <li className={styles.preLi}>
        <span className={styles.preSpan}>AAAAAAAAAAAAAAAAA</span>
      </li>
    );
  };

  return (
    <ul className={styles.taskList}>
      {todos.length ? (
        todos.map((item, i) => {
          return (
            <Task {...item} key={item.id} onDelete={() => onDelete(item.id)} />
          );
        })
      ) : (
        <PreText />
      )}
    </ul>
  );
};

export default TaskList;
