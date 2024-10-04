import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";

export default function App() {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
    </div>
  );
}
