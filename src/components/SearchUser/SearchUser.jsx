import { Col, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import Select from "react-select";
import { useEffect } from "react";

const SearchUser = ({ setValue, setError }) => {
  // useEffect(() => {
  //   setError("ownerId", { type: "custom", message: "custom message" });
  // }, []);
  const searchTerm = useSignal("");
  const searchResults = useSignal([]);
  const selectedOwner = useSignal();

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

  const options = searchResults.value.map((user) => ({
    value: user._id,
    label: user.name,
  }));
  console.log("searchResults", searchResults);

  return (
    <Col sm={12}>
      <Form.Group className="mb-2">
        <Form.Label className="dropdown">Choose Owner</Form.Label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          onInputChange={(e) => {
            console.log(("searchTerm", (searchTerm.value = e)));
            searchTerm.value = e;
            returnUsers();
          }}
          onChange={(e) => {
            selectedOwner.value = e;
            console.log(("selectedOwner", selectedOwner.value.value));
            setValue("ownerId", selectedOwner.value.value);
          }}
          isLoading={searchUsers.isLoading}
          options={options}
        />
      </Form.Group>
    </Col>
  );
};

export default SearchUser;
