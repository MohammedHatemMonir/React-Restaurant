import { useSignal } from "@preact/signals-react";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";

const CommentBox = ({ resID }) => {
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
    queryClient.invalidateQueries({queryKey: ["rest"+resID]});
    queryClient.refetchQueries(["rest"+resID]);

  }
  

  const handleSubmit = () => {

    if(comment.value != ""){
      PostRestaurantComment({ comment: comment.value, resID: resID });
      console.log("Submitted:", comment.value);
    }
    // Clear the input field after submission if you need
    // comment.value = "";
  };

  return (
    <div className="my-comment-box">
      <div className="d-flex flex-column align-items-center mb-4">
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          className="form-control mb-3"
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
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            width: "80%",
            maxWidth: "300px",
            boxSizing: "border-box",
            color: "white",
            // fontWeight:"Bold"
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
