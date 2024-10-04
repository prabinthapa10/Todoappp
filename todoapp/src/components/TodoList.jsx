import React from "react";

export default function TodoList({ todos, setTodos }) {
  function handleDelete(name) {
    console.log("Clicked ", name);
    setTodos(todos.filter((item) => item.name != name));
  }
  return (
    <div>
      <div>
        {todos.map((item) => (
          <div key={item.name}>
            <span>{item.name}</span>
            <button onClick={() => handleDelete(item.name)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
