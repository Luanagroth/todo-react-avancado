import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderBottom: "1px solid #ccc",
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer"
      }}
    >
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: 10 }}>
        X
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
