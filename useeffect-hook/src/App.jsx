// Example 1: Fetching Data on Dependency Change

import { useEffect, useState } from "react";

export function App() {
  // State to track the selected resource type (Posts, Users, Comments)
  const [resourceType, setResourceType] = useState("Posts");
  // State to store the fetched data
  const [items, setItems] = useState([]);

  // useEffect runs when 'resourceType' changes, fetching new data accordingly
  useEffect(() => {
    // Fetch data from the API when resourceType changes
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // Dependency array ensures effect runs only when 'resourceType' changes

  return (
    <>
      <div>
        {/* Buttons to change resource type, triggering a new API call */}
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {/* Display fetched data */}
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item, null, 2)}</pre>; // Adding 'key' to prevent React warnings
      })}
    </>
  );
}

// Best Practices for Example 1:
// - Always provide a dependency array in useEffect to avoid unnecessary re-renders.
// - Use keys when rendering lists to prevent React warnings and improve performance.
// - Avoid setting state directly inside useEffect without dependencies; it can cause an infinite loop.
// - Do not forget to handle errors in fetch requests.

// Example 2: Handling Window Resize Events
/* import { useEffect, useState } from "react";

function App() {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup function removes the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once when the component mounts

  return <div>{windowWidth}</div>;
} */

// Best Practices for Example 2:
// - Always clean up event listeners inside useEffect to prevent memory leaks.
// - Use an empty dependency array to ensure the effect runs only on mount.
// - Avoid setting state inside an event listener without a cleanup mechanism; it can cause performance issues.
// - Do not forget to remove event listeners when they are no longer needed.

export default App;
