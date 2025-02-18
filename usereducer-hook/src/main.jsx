import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter.jsx'
import Todo from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ---Simple Counter App example--- */}

    {/* <Counter /> */}

    {/* ---ToDo App example--- */}

    <Todo />
    
  </StrictMode>,
)
