import React from "react";
import TodoItems from "./TodoItems";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      <div>
        {todos.map((item) => (
          <TodoItems item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
