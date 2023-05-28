import React from "react";

import styles from "./style.module.css";

class Task extends React.Component {
  state = {
    isDoneTask: false,
    isLabelEdit: false,
  };

  render() {
    const isDone = this.state.isDoneTask;
    const isEdit = this.state.isLabelEdit;

    const { label, done, created, onDelete, onToggleDone } = this.props;

    const textDecoration = {
      textDecoration: isDone ? "line-through" : "",
      color: isDone ? "rgba(0,0,0, 0.5)" : "",
      backgroundColor: isDone ? "rgba(0,0,0, 0.1)" : "",
    };

    const btnDisabled = {
      backgroundColor: isDone ? "rgba(0,0,0, 0.1)" : "",
      borderRadius: isDone ? "0" : "",
      borderTopLeftRadius: isDone ? "20px" : "",
      borderBottomLeftRadius: isDone ? "20px" : "",
      cursor: isDone ? "auto" : "",
    };

    const btnDisabledAddiction = {
      borderTopLeftRadius: isDone ? "0" : "",
      borderBottomLeftRadius: isDone ? "0" : "",
    };

    const inputEdit = {
      display: isEdit ? "block" : "none",
    };

    return (
      <>
        <li className={styles.task} style={textDecoration}>
          <input
            className={styles.task__checkbox}
            defaultChecked={done}
            type="checkbox"
            onClick={() => this.setState({ isDoneTask: !isDone })}
            // onClick={onToggleDone}
          ></input>
          {isEdit ? (
            <input
              style={inputEdit}
              className={styles.input}
              readOnly={isDone}
              type="text"
            ></input>
          ) : (
            label
          )}
          <span className={styles.task__created}>{created}</span>
          <div className={styles.task__right}>
            <button
              className={styles.task__edit}
              disabled={isDone}
              style={btnDisabled}
              onClick={() => this.setState({ isLabelEdit: !isEdit })}
            ></button>
            <button
              className={styles.task__delete}
              style={btnDisabledAddiction}
              onClick={onDelete}
            ></button>
          </div>
        </li>
      </>
    );
  }
}

export default Task;
