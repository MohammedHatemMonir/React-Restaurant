import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";

export default function ResetPass() {
  const { id, token} =useParams();
  console.log("id and token",id,token)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/api/users/reset-password/${id}/${token}`;
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });


  const onSubmit = async function(data) {
    console.log("Password Reset");
    const result = await m.mutateAsync({ password: data.pass });
    console.log("result from resetpass",result)
  }
  return (
    <div className="container text-center" style={{ marginTop: "30vh" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Reset Your Password</h2>
          <p>Enter your new password</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="pass"
                required
                placeholder="*******"
                {...register("pass", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Password must have at least 7 characters",
                  },
                })}
              />
              {errors["pass"] && (
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontSize: "25px" }}
                >
                  {errors["pass"].message}
                </span>
              )}
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Submit
            </button>
            <div className="mt-3">
              <Link to="/" className="text-decoration-none">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
