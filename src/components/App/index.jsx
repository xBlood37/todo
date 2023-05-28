import React from "react";
import { nanoid } from "nanoid";
import { formatDistanceToNow } from "date-fns";

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";

import styles from "./style.module.css";

class App extends React.Component {
  state = {
    todoData: [
      {
        label: "One more",
        done: false,
        id: nanoid(),
        created: formatDistanceToNow(new Date(), { addSuffix: true }),
      },
      {
        label: "One second",
        done: false,
        id: nanoid(),
        created: formatDistanceToNow(new Date(), { addSuffix: true }),
      },
      {
        label: "Great! Fck idiot!",
        done: false,
        id: nanoid(),
        created: formatDistanceToNow(new Date(), { addSuffix: true }),
      },
    ],
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

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.todoTitle}>Todos</h1>
        <NewTaskForm />
        <TaskList todos={this.state.todoData} onDelete={this.deleteTask} />
        <Footer />
      </div>
    );
  }
}

export default App;
