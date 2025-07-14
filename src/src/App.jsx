import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: 600, margin: "50px auto", padding: 20, fontFamily: "Arial" }}>
        <h1>Todo React Avançado</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
