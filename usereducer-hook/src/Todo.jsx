import { useReducer, useState } from "react";
import List from "./List";

// Define action types as constants
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// Reducer function that manages the list of todos
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]; // Adds a new todo item
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => 
        todo.id === action.payload.id 
          ? { ...todo, complete: !todo.complete }  // Toggles completion status
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id); // Removes a todo
    default:
      return todos; // Returns current todos if no valid action
  }
}

// Helper function to create a new todo object
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []); // useReducer for managing todos
  const [name, setName] = useState(""); // State for input field

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } }); // Dispatches action to add todo
    setName(""); // Clears input field
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <List key={todo.id} todo={todo} dispatch={dispatch} /> // Renders List component for each todo
      ))}
    </>
  );
}
