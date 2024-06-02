import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { toast } from "react-toastify";

export default function ResetPass() {
  const msg = useSignal("");
  const { id, token } = useParams();
  console.log("id and token", id, token);
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

  const onSubmit = async function (data) {
    console.log("Password Reset");
    const result = await m.mutateAsync({ password: data.pass });
    // console.log("result from resetpass", result);
    // alert(result.data.msg);
    msg.value = result.data.msg;
    notify(result.data?.success);
  };

  function notify(msg) {
    if (msg === true) {
      toast.success("Updated Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Error in updating password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="container text-center" style={{ marginTop: "30vh" }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 style={{ color: "#ff4500", fontWeight: "bold" }}>
            Reset Your Password
          </h2>
          <p style={{ color: "#795d9a" }} className="font-weight-bold">
            Enter your new password
          </p>
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
                    value: 5,
                    message: "Password must have at least 5 characters",
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
            <button
              className="btn btn-primary btn-block"
              type="submit"
              style={{ backgroundColor: "#ff4500" }}
            >
              Submit
            </button>
            <div className="mt-3">
              <Link
                to="/"
                className="text-decoration-none font-weight-bold"
                style={{ color: "#795d9a" }}
              >
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
