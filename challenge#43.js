import React, { useContext, createContext } from "react";
const ThemeContext = createContext("light");
function App() {
  return (
	<ThemeContext.Provider value="dark">
  	<Toolbar />
	</ThemeContext.Provider>
  );
}
 function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
export default App;

//Current theme: dark

// The ThemeContext is created with a default value of "light", but this value is overridden by the value="dark" prop in the ThemeContext.Provider component.
// Inside the Toolbar component, the useContext(ThemeContext) hook retrieves the current context value, which is "dark" in this case.
// The Toolbar component then renders Current theme: dark based on the value obtained from the context.