import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineLike } from "react-icons/ai";
import ReviewsCard from "../Reviews/ReviewsCard";
import { useMutation, useQueryClient } from "react-query";
import { useSignal } from "@preact/signals-react";
import { apiClient } from "../../Data/apiclient";
import { Cart } from "../../Globals";
import { Col, Row } from "reactstrap";
function MealDetailsModal({
  id,
  openModal,
  closeModal,
  mealName,
  mealDesc,
  mealImg,
  mealPrice,
  MealComments,
  resID,
  resName,
  rating,
  desc,
  price,
  name,
}) {
  const queryClient = useQueryClient();

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

    console.log(comment.value);
    try {
      await m.mutateAsync(j);
      comment.value = "";

      queryClient.invalidateQueries({
        mutationKey: [`/GetMealComments/${id}`],
      });
      queryClient.refetchQueries([`/GetMealComments/${id}`]);
      closeModal();
    } catch (e) {
      console.log("Failed to post comment", e);
    }
  }

  function TextCommentBox() {
    return (
      <>
        <div className="my-comment-box mt-3">
          <div className="d-flex flex-column align-items-center mb-4">
            <input
              type="text"
              value={comment.value}
              onChange={(e) => (comment.value = e.target.value)}
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
                background: "#ff4500",
                // fontWeight:"Bold"
              }}
            >
              Add
            </button>
          </div>
        </div>
      </>
    );
  }

  // AddToCart Function
  function AddToCart() {
    if (Cart.value.ResId != resID) {
      console.log("ID NOT EQUAL");
      Cart.value.ResId = resID;
      Cart.value.ResName = resName;
      Cart.value.meals = [];
    }
    let tempCart = Cart.value;

    if (
      !tempCart.meals.some((meal) =>
        meal.id == id ? (meal.quantity += 1) : false
      )
    ) {
      console.log("meal not found");
      tempCart.meals.push({
        id: id,
        name: name,
        mealImg: mealImg,
        rating: rating,
        desc: desc,
        price: price,
        quantity: 1,
      });
    }
    Cart.value = {};
    Cart.value = tempCart;
    console.log("Cart", Cart.value, "temp cart", tempCart);
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
              <div className="item-sizes ">
                <ul className="sizes-list custom-radio-group">
                  <li className="size">
                    <label className="size-option toggle-active custom-radio-holder active">
                      <p className="input-label font-weight-bold">Regular</p>
                    </label>
                    <div className="price pull-right font-weight-bold">
                      <span className="cost text-danger"> {mealPrice}</span>
                      <span className="currency">$</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <TextCommentBox />
        <Row>
          {MealComments &&
            MealComments.map((item, index) => {
              return (
                <Col sm={12} md={6} key={index}>
                  <ReviewsCard
                    key={index + "rescomment" + resID}
                    name={item.user.name}
                    stars={item.commentSentmint[2] * 5}
                    emotion={item.commentSentmint[1]}
                    comment={item.Comment}
                    image={
                      item.user.userImg ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU"
                    }
                  />
                </Col>
              );
            })}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            AddToCart();
            closeModal();
          }}
        >
          Add To Cart
        </Button>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MealDetailsModal;
