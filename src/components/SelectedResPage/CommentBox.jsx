import { useSignal } from "@preact/signals-react";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";

const CommentBox = ({resID}) => {
  const comment = useSignal("");


 const m = useMutation({
    mutationKey: [resID],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/rescomment";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });



  const handleInputChange = (event) => {
    comment.value = event.target.value;
  };

  async function PostRestaurantComment(props) {
    var j = { text: props.comment, ResID: props.resID};
        try {
        await m.mutateAsync(j);
        }catch(e){
        console.log("Failed to post comment",e);

          }
        }

  const handleSubmit = () => {
    PostRestaurantComment({comment: comment.value, resID: resID});
    // Mohamed Hatim add your submission logic here
    console.log("Submitted:", comment.value);
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
          marginTop: "15px",
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
