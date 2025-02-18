import { useState, useTransition } from "react";

export default function App() {
  // Declare the 'isPending' state to track if a transition is in progress.
  // Declare 'startTransition' function to wrap the update logic that is supposed to be deferred.
  // Note: When using useTransition, expect two renders: one for the immediate state update and one for the deferred update.
  const [isPending, startTransition] = useTransition(); // Best Practice: Use only for non-urgent state updates that are computationally heavy.

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    // Immediately update the input state for instant feedback.
    setInput(e.target.value);

    // Wrap the heavy computation in startTransition.
    // This tells React that this update is less urgent, allowing the immediate input update to be prioritized.
    startTransition(() => {
      const l = [];
      // Simulate a heavy computational task, like processing a large dataset.
      // Best Practice: Ensure that the computation inside startTransition is well optimized.
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      // Update the list state once the heavy task is complete.
      setList(l);
    });

    // Potential Pitfall: Overusing startTransition for updates that should be immediate may cause unwanted delays.
    // Also, if the heavy computation isn't optimized, it might still cause noticeable performance issues,
    // even if it's deferred.
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..." // While the deferred update is processing, display a loading message.
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}
