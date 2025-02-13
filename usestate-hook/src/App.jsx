import { useState } from "react";

function createInitialCount() {
  console.log("Expensive calculation for initial count...");
  return 4; // Imagine this being a more complex calculation
}

function App() {
  // useState initializes 'count' with the value 4
  // 'setCount' is the function to update 'count'
  const [count, setCount] = useState(createInitialCount);

  // Function to decrement the count value
  function decrementCount() {
    // Using the functional updater to ensure correct state updates
    setCount((prevCount) => prevCount - 1);
  }

  // Function to increment the count value
  function incrementCount() {
    // Using the functional updater for consistency
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      {/* Button to decrease count */}
      <button onClick={decrementCount}>-</button>

      {/* Display current count */}
      <span>{count}</span>

      {/* Button to increase count */}
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

/*
  Example: Why using `setCount(count - 1)` can cause issues

  Suppose `count` is initially 4.
  
  If we call:
    setCount(count - 1);
    setCount(count - 1);

  Both calls will capture the same stale `count` value (4),
  resulting in:
    setCount(4 - 1);  // count becomes 3
    setCount(4 - 1);  // count is still 3 instead of 2!

  However, using the functional updater:
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);

  Ensures the correct sequential updates:
    setCount(4 - 1);  // count becomes 3
    setCount(3 - 1);  // count becomes 2 (correct)
*/

/*
  function App() {
    // Bad practice: createInitialCount() is called on every render unnecessarily
    const [count, setCount] = useState(createInitialCount());

    function createInitialCount() {
      console.log("Expensive calculation for initial count...");
      return 4; // Imagine this being a more complex calculation
    }

    return (
      <>
        <span>{count}</span>
      </>
    );
  }

  In the above example, `createInitialCount()` runs on every render,
  even though its result is only needed during the initial render.
  This can be inefficient if the function performs heavy calculations.

  To fix this, use an initializer function:

  const [count, setCount] = useState(createInitialCount);

  Now, React will call `createInitialCount` only once, during the first render,
  and ignore it in subsequent renders, improving performance.
*/
