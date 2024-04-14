import { Col, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const searchTerm = useSignal("");
  const searchResults = useSignal([]);

  const handleSearchChange = (e) => {
    searchTerm.value = e.target.value;
    console.log( searchTerm.value)
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

    if(searchTerm
      .value.length>=3){
    const result = await searchUsers.mutateAsync({
      name: searchTerm.value,
    });

    console.log("Search result", result.data);
    searchResults.value = result.data;
  }else{
    searchResults.value=[]
  
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

export default SearchComponent;

// import React from "react";
// import { Navbar, Nav, Container, Image } from "react-bootstrap";
// import { FaShoppingCart, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// const NavigationBar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img
//             src="/logo.png"
//             height="30"
//             className="d-inline-block align-top"
//             alt="Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">
//               <FaMapMarkerAlt /> Location
//             </Nav.Link>
//             <Nav.Link href="#link">
//               <FaShoppingCart /> Cart
//             </Nav.Link>
//           </Nav>
//           <Nav className="ml-auto">
//             <Nav.Link href="#link">
//               <FaSearch /> Search
//             </Nav.Link>
//             <Nav.Link href="#link">
//               <Image
//                 src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
//                 roundedCircle
//                 style={{ width: "30px", height: "30px" }}
//                 alt="Profile"
//               />
//             </Nav.Link>
//             <Nav.Link href="#link">Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

// import React from "react";
// import { useForm } from "react-hook-form";
import { useSignal } from "@preact/signals-react";

// function MyForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // Access the form data here
//     console.log("Submitted data:", data);

//     // You can also perform other actions such as sending data to an API
//     // For example:
//     // fetch('https://example.com/api/submit', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(data),
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log(data))
//     // .catch(error => console.error('Error:', error));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Name:
//         <input {...register("name", { required: true })} />
//         {errors.name && <span>This field is required</span>}
//       </label>
//       <br />
//       <label>
//         Email:
//         <input {...register("email", { required: true })} />
//         {errors.email && <span>This field is required</span>}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
