import React, { useState } from "react";
import { Dropdown, FormControl, Container } from "react-bootstrap";

const SearchDropdown = () => {
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grape"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <Container className="mt-5">
      <h1>Search Dropdown Example</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchTerm}
          />
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Dropdown.Item key={index}>{item}</Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item>No results found</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default SearchDropdown;
