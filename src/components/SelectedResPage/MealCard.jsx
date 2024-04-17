import Stars from "../Stars/Stars";
import { Cart, UserData } from "../../Globals";
import { useSignal } from "@preact/signals-react";
import MealDetailsModal from "./MealDetailsModal";
import DeleteIcon from "./../../Icons/DeleteIcon";
import EditIcon from "./../../Icons/EditIcon";
import DeleteMealModal from "./DeleteMealModal";
import EditMealModal from "./EditMealModal";

export default function MealCard({
  id,
  name,
  desc,
  price,
  mealImg,
  rating,
  resID,
  resName,
  MealComments,
}) {
  const displayModal = useSignal(false);
  function handleClose() {
    displayModal.value = false;
  }

  // Hema Here
  const showDelModal = useSignal(false);
  const showEditModal = useSignal(false);

  // Handle open and close popup modals
  function onOpenDel() {
    showDelModal.value = true;
  }
  function onOpenEdit() {
    showEditModal.value = true;
  }

  function onCloseDel() {
    showDelModal.value = false;
  }
  function onCloseEdit() {
    showEditModal.value = false;
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        margin: "0.75rem 0",
        cursor: "pointer",
      }}
    >
      {/* Meal Img */}
      <img
        onClick={() => (displayModal.value = true)}
        src={mealImg}
        alt={mealImg}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          border: "none",
        }}
        className="meal-card__image"
      />
      <div style={{ padding: "1rem" }} className="meal-card__content">
        {/* Modal Here */}
        <MealDetailsModal
          id={id}
          openModal={displayModal.value}
          closeModal={handleClose}
          mealName={name}
          mealDesc={desc}
          mealImg={mealImg}
          mealPrice={price}
          MealComments={MealComments}
          resID={resID}
          resName={resName}
          rating={rating}
          desc={desc}
          price={price}
          name={ name}
        />
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
          className="meal-card__title"
        >
          {name}
        </h3>
        <p
          style={{
            color: "#4b5563",
            marginBottom: "1rem",
          }}
          className="meal-card__description"
        >
          {desc}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="meal-card__footer"
        >
          <div>
            <p
              style={{
                color: "#dc2626",
                fontSize: "1.125rem",
                fontWeight: "600",
                margin: "0",
              }}
              className="meal-card__price"
            >
              <div className="font-weight-bold">
                <span className="text-danger"> {price}</span>
                <span className="text-dark"> $</span>
              </div>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-60px",
            }}
            className="meal-card__rating"
          >
            <Stars stars1={rating} />
          </div>
          {/* <button
            style={{
              backgroundColor: "#e32207",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onClick={AddToCart}
            className="btn meal-card__button"
          >
            Buy
          </button> */}
        </div>
        {UserData.value.role == "ADMIN" && (
          <div className="position-relative">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transform: "scale(1.5)",
                margin: "15px 17% 10px 17%",
              }}
            >
              <div onClick={onOpenDel} className="">
                <DeleteIcon className="delete-icon" />
              </div>
              <div onClick={onOpenEdit} className="">
                <EditIcon className="edit-icon" />
              </div>
            </div>
          </div>
        )}
      </div>
      {UserData.value.role == "ADMIN" && showDelModal.value == true && (
        <DeleteMealModal
          mealId={id}
          mealName={name}
          openModal={() => (showDelModal.value = true)}
          closeModal={onCloseDel}
        />
      )}
      {UserData.value.role == "ADMIN" && showEditModal.value == true && (
        <EditMealModal
          mealId={id}
          mealName={name}
          openModal={() => (showEditModal.value = true)}
          closeModal={onCloseEdit}
        />
      )}
    </div>
  );
}
