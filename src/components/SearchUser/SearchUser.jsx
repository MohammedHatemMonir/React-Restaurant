import { Col, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Link } from "react-router-dom";
import { useSignal } from "@preact/signals-react";

const SearchUser = () => {
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

  return (
    <Col sm={12}>
      <Form.Group className="mb-2 mb-sm-0">
        <Form.Label className="dropdown">Search user</Form.Label>
        <Form.Control
          type="text"
          name="search-user"
          placeholder="Search User"
          value={searchTerm.value}
          onChange={handleSearchChange}
        />

        <div className="dropdown-content">
          {searchResults.value.map((user, index) => (
            <Link key={index} className="d-block text-decoration-none">
              {user.name}
            </Link>
          ))}
        </div>
      </Form.Group>
    </Col>
  );
};

export default SearchUser;
