import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ handleToggle, handleDelete, todos }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          i={i}
        ></TodoListItem>
      ))}
    </ul>
  );
};
