import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineLike } from "react-icons/ai";
import ReviewsCard from "../Reviews/ReviewsCard";
import { useMutation } from "react-query";
import { useSignal } from "@preact/signals-react";
import { apiClient } from "../../Data/apiclient";

function MealDetailsModal({
  id,
  openModal,
  closeModal,
  mealName,
  mealDesc,
  mealImg,
  mealPrice,
  MealComments,
}) {



  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/analyze/mealcomment";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const comment = useSignal("");

  async function PostRestaurantComment() {
    var j = { text: comment.value, mealid: id };

    console.log(comment.value)
    try {
      await m.mutateAsync(j);

      comment.value = "";

    } catch (e) {
      console.log("Failed to post comment", e);
    }
  }

  
console.log("MealComments",id, MealComments)
function TextCommentBox(){
  return(<>
  
  <div className="my-comment-box">
      <div className="d-flex flex-column align-items-center mb-4">
        <input
          type="text"
          value={comment.value}
          onChange={(e) => comment.value = e.target.value}
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
          onClick={PostRestaurantComment}
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
  
  </>)
}

  return (
    <Modal
      show={openModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="font-weight-bold"
        >
          Meal Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content select-res-page">
          <div className="item-cover">
            <div
              className="image image-ratio ratio-dish-cover"
              style={{
                height: "200px",
              }}
            >
              <div className="ratio-content">
                <img
                  src={mealImg}
                  alt={mealImg}
                  className="v-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="modal-body">
            <div className="item-header">
              <h3 className="title font-weight-bold">{mealName}</h3>
            </div>
            <p className="item-description ">{mealDesc}</p>
            <div className="item-actions">
              <div className="reactions">
                <button
                  type="button"
                  disabled="disabled"
                  className="action-btn reaction-btn like-btn"
                >
                  <span className="icon">
                    <AiOutlineLike />
                  </span>
                  <span className="count"> 323</span>
                </button>
              </div>
              <div className="item-sizes ">
                <ul className="sizes-list custom-radio-group">
                  <li className="size">
                    <label className="size-option toggle-active custom-radio-holder active">
                      <p className="input-label font-weight-bold">Regular</p>
                    </label>
                    <div className="price pull-right font-weight-bold">
                      <span className="cost text-danger"> {mealPrice}</span>
                      <span className="currency"> EGP</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
            <TextCommentBox/>
        <ReviewsCard
              // key={index + "rescomment" + resID}
              // name={item.user.name}
              // stars={item.commentSentmint[2] * 5}
              // emotion={item.commentSentmint[1]}
              // comment={item.Comment}
              // image={
              //   item.user.userImg ||
              //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU"
              // }
        
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default MealDetailsModal;
