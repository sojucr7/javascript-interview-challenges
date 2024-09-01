//What issue exists in the below code regarding state variable:
import React, { useState } from "react";
 function App() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
	setCounter(counter + 1);
  }
   return (
	<div>
  	<button onClick={incrementCounter}>Increment</button>
  	<p>Counter: 0</p>
	</div>
  );
}
 
export default App;