import React from "react";
import { nanoid } from "nanoid";
import { formatDistanceToNow } from "date-fns";

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";

import styles from "./style.module.css";

class App extends React.Component {
  state = {
    todoData: [],
  };

  onAddTaskHandler = (e) => {
    if (!e.target.value || e.target.value === " ") return;
    if (e.which === 13 || e.key === "Enter" || e.code === "Enter") {
      const newItem = {
        label: e.target.value,
        done: false,
        id: nanoid(),
        created: formatDistanceToNow(new Date(), { addSuffix: true }),
        edit: false,
      };
      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr,
        };
      });
      e.target.value = "";
    }
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArr = [...before, ...after];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.todoTitle}>Todos</h1>
        <NewTaskForm onAddTaskHandler={this.onAddTaskHandler} />
        <TaskList
          onToggleDone={this.onToggleDone}
          todos={this.state.todoData}
          onDelete={this.deleteTask}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
