import React from "react";

import styles from "./style.module.css";

class TasksFilter extends React.Component {
  render() {
    return (
      <ul className={styles.tasksFilter}>
        <li className={styles.tasksFilter__item}>
          <button className={styles.tasksFilter__button}>All</button>
        </li>
        <li className={styles.tasksFilter__item}>
          <button className={styles.tasksFilter__button}>Completed</button>
        </li>
        <li className={styles.tasksFilter__item}>
          <button className={styles.tasksFilter__button}>All Completed</button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
