import { Col, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Spinner } from "react-bootstrap";
import { useSignal } from "@preact/signals-react";

const SearchUser = ({ setValue }) => {
  const searchTerm = useSignal("");
  const searchResults = useSignal([]);

  const handleSearchChange = (e) => {
    searchTerm.value = e.target.value;
    console.log(searchTerm.value);
    returnUsers();
  };

  const searchUsers = useMutation({
    mutationKey: ["searchUsers"],
    mutationFn: async (params) => {
      let url = "/SearchUser";
      return await apiClient.post(url, params);
    },
  });

  const returnUsers = async () => {
    if (searchTerm.value.length >= 3) {
      const result = await searchUsers.mutateAsync({
        name: searchTerm.value,
      });

      console.log("Search result", result.data);
      searchResults.value = result.data;
    } else {
      searchResults.value = [];
    }
  };

  function selectOwner(id) {
    console.log("Selected Owner", id);
    setValue("ownerId", id);
  }
  return (
    <Col sm={12}>
      <Form.Group className="mb-2 mb-sm-0">
        <Form.Label className="dropdown">Choose Owner</Form.Label>
        <Form.Control
          type="text"
          name="search-user"
          placeholder="Choose Owner"
          value={searchTerm.value}
          onChange={handleSearchChange}
        />
        {searchUsers.isLoading ? (
          <div className="loading-spinner">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="dropdown-content">
            {searchResults.value.map((user, index) => (
              <div
                key={index}
                className="d-block text-decoration-none"
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  color: "#fff",
                  backgroundColor: "#007bff",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => {
                  selectOwner(user._id);
                  searchTerm.value = user.name;
                }}
              >
                {user.name}
              </div>
            ))}
          </div>
        )}
      </Form.Group>
    </Col>
  );
};

export default SearchUser;
