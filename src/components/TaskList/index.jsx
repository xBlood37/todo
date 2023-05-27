import React from "react";

import Task from "../Task";

import styles from "./style.module.css";

const TaskList = ({ todos }) => {
  return (
    <ul className={styles.taskList}>
      {todos.map((item) => {
        return <Task {...item} key={item.id} />;
      })}
    </ul>
  );
};

export default TaskList;
