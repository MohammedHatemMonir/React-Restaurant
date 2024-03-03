import { useSignal } from "@preact/signals-react";

const CommentBox = () => {
  const comment = useSignal("");

  const handleInputChange = (event) => {
    comment.value = event.target.value;
  };

  const handleSubmit = () => {
    // Mohamed Hatim add your submission logic here
    console.log("Submitted:", comment);
    // Clear the input field after submission if you need
    // comment.value = "";
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
    >
      <input
        type="text"
        value={comment}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
          width: "300px",
        }}
        placeholder="Add new comment"
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CommentBox;
