import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "./../../Data/apiclient";

export default function ForgotPass() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/forget-password";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const onSubmit = async function (data) {
    const result = await m.mutateAsync({ email: data.email });
    alert(result.data.msg);
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-center" style={{ marginTop: "30vh" }}>
        <div className="col-md-6">
          <h2>Forgot Your Password?</h2>
          <p>Enter your email below and we will send you a reset link</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Enter Your Email"
                id="email-address"
                name="email"
                type="email"
                required
                autoComplete="email"
                {...register("email", {
                  required: "Please enter your email address",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            <div className="m-0">
              <span
                className="text-danger font-weight-bold "
                style={{ fontSize: "25px" }}
              >
                {errors.email && errors.email.message}
              </span>
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Send
            </button>
          </form>
          <div className="mt-3">
            <Link to="/" className="text-decoration-none">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
