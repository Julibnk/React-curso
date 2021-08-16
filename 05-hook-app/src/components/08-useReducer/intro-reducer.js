const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

// Accion, tiene que tener un type (tipo de accion) y es opcional pero estandar, enviar un payload con los datos para realizar la accion
const agregarAction = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, agregarAction);

console.log(todos);
