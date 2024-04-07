import React from "react";
import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Access the form data here
    console.log("Submitted data:", data);

    // You can also perform other actions such as sending data to an API
    // For example:
    // fetch('https://example.com/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Email:
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
