import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import useInput from "../hooks/useInput";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const { value, onChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={value}
        onChange={onChange}
        style={{ padding: 8, width: "70%" }}
      />
      <button type="submit" style={{ padding: 8, marginLeft: 10 }}>
        Adicionar
      </button>
    </form>
  );
};

export default React.memo(TodoForm);
