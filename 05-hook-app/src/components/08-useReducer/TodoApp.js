import React, { useEffect, useReducer } from "react";

import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

// lo que devuelve la funcion init es el initial state
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  // todos es el estado, dispatch se usa para mandarle aciones al reducer, todoReducer es la funcion que gestiona la logica del reducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //   console.log(formValues);

  const handleAddTodo = (newTodo) => {
    //Nueva accion para mandarle al reducer
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);

    console.log(todoId);
  };

  const handleToggle = (todoId) => {
    dispatch({ type: "toggle", payload: todoId });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}

          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            todos={todos}
          ></TodoList>
        </div>
        <div className="col">
          <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
        </div>
      </div>
    </div>
  );
};
