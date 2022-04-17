import React, { useState } from "react";

function App() {
  const [itemText, setItemText] = useState("");
  const [item, addItem] = useState([]);

  function handleChange(event) {
    const itemValue = event.target.value;
    setItemText(itemValue);
  }
  function handleClick() {
    addItem((prevItem) => {
      return [...prevItem, itemText];
    });
    setItemText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={itemText} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((itemText) => (
            <li>{itemText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
