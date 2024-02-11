import React, { useState } from "react";
import "./test.scss";
const Test = () => {
  // State for input value and output
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Perform any processing on inputValue if needed
    // For demonstration purposes, let's just set the output to the input value
    setOutput(inputValue);
  };

  return (
    <div className="test">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      <div>Output: {output}</div>
    </div>
  );
};

export default Test;
