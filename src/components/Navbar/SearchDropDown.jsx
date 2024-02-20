import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useSignal } from "@preact/signals-react";

const SearchDropdown = ({
  value,
  onChange,
  entity,
  includecompany,
  placeholder,
  handleSuggestionClick
}) => {
  if (!handleSuggestionClick) {
    handleSuggestionClick = (suggestion) => {
      selectedSuggestion.value = suggestion  // Set the selected suggestion when clicked
      console.log("selectedOptionFromQuickSearch", suggestion);
      showSuggestions.value = false // Close the suggestions dropdown
      const { entity, entityid, display } = suggestion;
      const navigationUrl = `/${entity}/${entityid}/${display}`;
      navigate(navigationUrl);

    };
  }

  //handle Visibility
  const showSuggestions = useSignal(false);
  //handle list of suggestions
  const suggestions = useSignal([]);
  //handle suggestion selection
  const selectedSuggestion = useSignal("");
  //handle search query
  const searchText = useSignal("");
  //contact quick search api 
  const navigate = useNavigate();

  //called on searchkey change
  // handle suggestions showing 
  const handleSearchClick = () => {
    if (!showSuggestions.value) {
      showSuggestions.value = true
    }
  };
  //handle hidding results
  const handleInputBlur = () => {
    setTimeout(() => {
      showSuggestions.value = false

    }, 200);
  };

  //update searchbox 
  const handleInputChange = (event) => {
    const newSearchText = event.target.value;
    searchText.value = newSearchText

  };

  return (
    <div
      className="position-relative"
      data-bs-toggle="search"
      data-bs-display="static"
      aria-expanded="false"
    >
      <Form.Control
        className="form-control search-input fuzzy-search rounded-pill form-control-sm"
        type="search"
        placeholder={placeholder ? placeholder : "Search..."}
        style={{ userSelect: "none" }}
        aria-label="Search"
        onClick={handleSearchClick} // Handle click to toggle suggestions
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        autoComplete="off"
        // onKeyDown={handleKeyDown}
        value={value ? value : searchText.value}
      />
      {showSuggestions.value && suggestions.value.length > 0 && (

        <div className="dropdown-menu border rounded shadow-sm border-primary font-base start-0 py-0 w-100 show overflow-auto scrollbar 
        "
          style={{
            maxHeight: "385px",
            overflowY: "auto",
            overflowX: "auto"
          }} >
          {/*header for the search Result  */}
          {/* <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
            Recently Searched
          </h6> */}

          {suggestions.value.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              className="dropdown-item py-2 d-flex align-items-center"
              variant="secondary"
              // href={`#suggestion-${index}`}
              onClick={() => {
                handleSuggestionClick(suggestion);
              }} // Handle click on suggestion
            >
              <div className="avatar avatar-l  me-2 text-900">
              </div>
              <div className="flex-1">
                <h6 className="mb-0 text-1000 title">{suggestion.display}</h6>
                <p className="fs--2 mb-0 d-flex text-700">smith@technext.it</p>
              </div>
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default SearchDropdown;
