import React, { useState } from "react";

function App() {
  const data = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
    { id: 5, name: "Strawberry", category: "Fruit" },
  ];

  const [filters, setFilters] = useState({
    Fruit: true,
    Vegetable: true,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredData = data.filter((item) => filters[item.category]);

  return (
    <div className="App">
      <h1>Checkbox Filter Example</h1>
      <div>
        <h2>Filter by Category</h2>
        <div>
          {Object.keys(filters).map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                name={category}
                checked={filters[category]}
                onChange={handleCheckboxChange}
              />
              {category}
            </label>
          ))}
        </div>

        <h3>Filtered Items</h3>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
