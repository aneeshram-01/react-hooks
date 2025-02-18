import { useReducer } from "react";

// Define action types as constants to avoid typos and make the code more readable
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

// Reducer function that determines the new state based on the action type
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 } // Increases the count
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 } // Decreases the count
    default:
      return state // Returns the current state if action type is unknown
  }
}

export default function App() {
  // useReducer takes the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Dispatch function is used to send actions to the reducer
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT }) // Triggers INCREMENT action
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT }) // Triggers DECREMENT action
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span> {/* Displays the current count */}
      <button onClick={increment}>+</button>
    </>
  );
}
