import React from "react";
import TodoList from "./TodoList.jsx";
import styles from "./Form.module.css";
export default function Form({ todo, setTodo, todos, setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log(todos);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter task to add"
          className={styles.input}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
