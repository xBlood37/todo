import React from "react";

import Task from "../Task";

import styles from "./style.module.css";

const TaskList = ({ todos, onDelete, onToggleDone }) => {
  return (
    <ul className={styles.taskList}>
      {todos.length ? (
        todos.map((item, i) => {
          return (
            <Task
              {...item}
              key={item.id}
              onDelete={() => onDelete(item.id)}
              onToggleDone={() => onToggleDone(item.id)}
            />
          );
        })
      ) : (
        <li className={styles.preLi}>
          <span className={styles.preSpan}>...</span>
        </li>
      )}
    </ul>
  );
};

export default TaskList;
