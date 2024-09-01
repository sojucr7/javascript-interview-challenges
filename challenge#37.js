import React, { useState } from "react"
function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}
export default App

// pass setCount as setCount((prevCount)=>prevCount+1) else it take doesn't increment correctly if increment fn is called mulitple times from another function