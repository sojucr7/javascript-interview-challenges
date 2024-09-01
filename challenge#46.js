//What will be the behavior of useEffect hook in the below code:
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
	const interval = setInterval(() => {
  	setCount((prevCount) => prevCount + 1);
	}, 1000);
 
	return () => clearInterval(interval);
  }, []);
   return <div>Count: {count}</div>;
}
 export default App;

 //correct implementation,it prints 0,1,2,3 at every 1sec