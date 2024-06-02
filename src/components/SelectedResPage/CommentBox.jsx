import { useSignal } from "@preact/signals-react";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import "./CommentBox.scss";
const CommentBox = ({ query, resID }) => {
  const comment = useSignal("");

  const queryClient = useQueryClient();

  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/analyze/rescomment";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const handleInputChange = (event) => {
    comment.value = event.target.value;
  };

  async function PostRestaurantComment(props) {
    var j = { text: comment.value, ResID: props.resID };
    try {
      await m.mutateAsync(j);

      comment.value = "";
    } catch (e) {
      console.log("Failed to post comment", e);
    }
    queryClient.invalidateQueries({ queryKey: ["rest" + resID] });
    queryClient.refetchQueries(["rest" + resID]);
    query.refetch();
  }

  const handleSubmit = () => {
    if (comment.value != "") {
      PostRestaurantComment({ comment: comment.value, resID: resID });
      console.log("Submitted:", comment.value);
    }
    // Clear the input field after submission if you need
    // comment.value = "";
  };

  return (
    <div className="my-comment-box w1">
      <div className="d-flex flex-column align-items-center mb-4">
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          className="form-control mb-2"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            width: "80%",
            maxWidth: "300px",
            boxSizing: "border-box",
          }}
          placeholder="Add new comment"
        />
        <button
          onClick={handleSubmit}
          className="btn"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            width: "80%",
            maxWidth: "300px",
            boxSizing: "border-box",
            color: "white",
            transition: "background-color 0.3s ease", // Adding transition for smoother effect
          }}
        >
          Add New Comment
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
