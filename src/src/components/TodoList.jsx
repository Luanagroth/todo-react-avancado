import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filteredTodos } = useContext(TodoContext);

  if (filteredTodos.length === 0) return <p>Nenhuma tarefa</p>;

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
