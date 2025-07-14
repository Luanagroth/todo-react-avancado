import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoFilters = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
        style={{ marginRight: 10 }}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
        style={{ marginRight: 10 }}
      >
        Concluídas
      </button>
      <button
        onClick={() => setFilter("pending")}
        disabled={filter === "pending"}
      >
        Pendentes
      </button>
    </div>
  );
};

export default React.memo(TodoFilters);
