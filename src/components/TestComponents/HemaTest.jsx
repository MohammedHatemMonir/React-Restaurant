import React, { useState } from "react";
import Select from "react-select";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState(""); // state to hold input value

  // options for the Select component
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  // function to handle input change
  const handleInputChange = (newValue) => {
    setInputValue(newValue); // set input value to state
    console.log("inputValue", inputValue);
  };

  return (
    <Select
      inputValue={inputValue} // set the inputValue prop to the state value
      options={options}
      onInputChange={handleInputChange} // pass the handler to onInputChange event
    />
  );
};

export default MyComponent;
