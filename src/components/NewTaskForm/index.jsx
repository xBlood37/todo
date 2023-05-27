import React from "react";

import styles from "./style.module.css";

const NewTaskForm = () => {
  return (
    <div className={styles.newTaskForm}>
      <input
        className={styles.newTaskForm__input}
        type="text"
        placeholder="Add..."
      ></input>
      <button className={styles.newTaskForm__button}>Add</button>
    </div>
  );
};

export default NewTaskForm;
