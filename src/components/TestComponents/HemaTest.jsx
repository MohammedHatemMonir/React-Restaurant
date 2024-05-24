import React, { useState } from "react";
import { useSignal } from "@preact/signals-react";
const initialData = ["Allah Akbar", "Hello", "Welcome"];

const App = () => {

  const data = useSignal(initialData);
  const inputValue = useSignal("");


  const onSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Add the new value to the data array
    const updatedData = [...data.value, inputValue.value];
    data.value = updatedData;
    // Clear the input field
    inputValue.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue.value}
          onChange={(e) => (inputValue.value = e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {data.value.map((message, index) => (
          <Me key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

const Me = ({ message }) => {
  return <div>{message}</div>;
};

export default App;
