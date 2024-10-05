import React from "react";
import styles from "./TodoItem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(name) {
    console.log("Clicked ", name);
    setTodos(todos.filter((item) => item.name != name));
  }

  function handleComplete(name) {
    setTodos(
      todos.map((item) =>
        item.name == name ? { ...item, done: !item.done } : item
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div>
      <div className={styles.item} key={item.name}>
        <span className={className} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <button
          className={styles.button}
          onClick={() => handleDelete(item.name)}
        >
          X
        </button>
      </div>
    </div>
  );
}
