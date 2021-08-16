import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDetauld();

    if (description.trim().length <= 1) {
      return;
    }

    //Nuevo objeto
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    //Disparar la accion del reducer
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
