import React from "react";

import styles from "./style.module.css";

class NewTaskForm extends React.Component {
  render() {
    const { onAddTaskHandler } = this.props;

    return (
      <div className={styles.newTaskForm}>
        <input
          className={styles.newTaskForm__input}
          type="text"
          placeholder="Add..."
          onKeyDown={(e) => onAddTaskHandler(e)}
          defaultValue={""}
        ></input>
      </div>
    );
  }
}

export default NewTaskForm;
