import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const notifySuccess = () =>
    toast.success("Success notification!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyFail = () =>
    toast.error("Failed notification!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <button onClick={notifySuccess}>Success!</button>
      <button onClick={notifyFail}>Fail!</button>
      <ToastContainer />
    </div>
  );
}
