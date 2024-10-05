import React from "react";
import TodoItems from "./TodoItems";

export default function TodoList({ todos, setTodos }) {
  const sortList = todos.sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div>
      <div>
        {sortList.map((item) => (
          <TodoItems item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
