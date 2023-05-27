import React from "react";
import { nanoid } from "nanoid";
import { formatDistanceToNow } from "date-fns";

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";

import styles from "./style.module.css";

const App = () => {
  const todoData = [
    {
      label: "One more",
      done: true,
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
  ];

  return (
    <div className={styles.app}>
      <h1 className={styles.todoTitle}>Todos</h1>
      <NewTaskForm />
      <TaskList todos={todoData} />
      <Footer />
    </div>
  );
};

export default App;
