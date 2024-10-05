import React from "react";
import styles from "./Footer.module.css";
export default function Footer({ todos }) {
  const completedTask = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div className={styles.footer}>
      <span className={styles.total}>Total Task: {totalTodos}</span>
      <span className={styles.completed}>Completed Task: {completedTask}</span>
    </div>
  );
}
