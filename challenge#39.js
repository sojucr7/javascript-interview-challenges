//Find the issue in the below code when using the index as a key for list items:

import React from "react";
function App() {
 const items = [
   { id: 1, text: "Item 1" },
   { id: 2, text: "Item 2" },
 ];
 const listItems = items.map((item, index) => <li key={index}>{item.text}</li>);
 return <ul>{listItems}</ul>;
}
export default App;

//issue when add new item to beginning,react rerender everything