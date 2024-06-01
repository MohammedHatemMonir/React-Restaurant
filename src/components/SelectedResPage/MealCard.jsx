import Stars from "../Stars/Stars";
import { AIMealID, UserData } from "../../Globals";
import { useSignal } from "@preact/signals-react";
import MealDetailsModal from "./MealDetailsModal";
import DeleteIcon from "./../../Icons/DeleteIcon";
import DeleteMealModal from "./DeleteMealModal";
import EditMealModal from "./EditMealModal";
import "./MealCard.scss";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import defaultMeal from "../../images/defaultMeal.jpg";
export default function MealCard({
  id,
  name,
  desc,
  price,
  mealImg,
  rating,
  resID,
  ownerID,
  resName,
}) {
  const MealComments = useSignal([]);

  const getCommentsMutation = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/GetMealComments/${id}`;
      console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  console.log("aimealid: ", AIMealID.value, " id: ", id);
  const displayModal = useSignal(AIMealID.value === id ? true : false);
  function handleClose() {
    displayModal.value = false;
  }

  async function onClick() {
    displayModal.value = true;
    const result = await getCommentsMutation.mutateAsync();
    MealComments.value = result.data;
    console.log("getCommentsMutation reslut", result.data);
  }

  // Hema Popup Modals Here
  const showDelModal = useSignal(false);
  const showEditModal = useSignal(false);

  // Handle open and close popup modals
  function onOpenDel() {
    showDelModal.value = true;
  }

  function onCloseDel() {
    showDelModal.value = false;
  }

  function onOpenEdit() {
    showEditModal.value = true;
  }

  function onCloseEdit() {
    showEditModal.value = false;
  }

  return (
    <section
      className="meal-blogs"
      id="blogs"
      style={{ transform: "scale(0.85)" }}
    >
      {/* Meal Details Modal Here */}
      <MealDetailsModal
        id={id}
        openModal={displayModal.value}
        closeModal={handleClose}
        mealName={name}
        mealDesc={desc}
        mealImg={mealImg}
        mealPrice={price}
        MealComments={MealComments.value?.MealComments}
        resID={resID}
        resName={resName}
        rating={rating}
        desc={desc}
        price={price}
        name={name}
      />
      <div className="text-decoration-none box-container">
        <div className=" box" style={{ border: `3px solid black` }}>
          <div className="image">
            <h3 style={{ background: "white" }}>
              <Stars stars1={rating} /> <br />
              <br />
            </h3>
            <img src={mealImg || defaultMeal} alt="Res-Img" />
          </div>
          <div className="text-decoration-none content">
            <h3 style={{ fontSize: "25px", fontWeight: "bold" }}>{name}</h3>
            <p>{desc}</p>
            <Link
              onClick={() => {
                onClick();
              }}
              className="w-100 btn"
              style={{ marginTop: "-10px" }}
            >
              <span>Read More</span>
            </Link>
            {(UserData.value.role === "ADMIN" ||
              (UserData.value.role === "owner" &&
                UserData.value.id === ownerID)) && (
              <div className="position-relative">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "25px 5% 0px  5%",
                    transform: "scale(1.8)",
                  }}
                >
                  <div onClick={onOpenDel}>
                    <DeleteIcon style={{ cursor: "pointer" }} />
                  </div>

                  <div onClick={onOpenEdit}>
                    <IoSettings style={{ cursor: "pointer" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showDelModal.value == true && (
        <DeleteMealModal
          mealId={id}
          mealName={name}
          openModal={() => (showDelModal.value = true)}
          closeModal={onCloseDel}
        />
      )}
      {showEditModal.value == true && (
        <EditMealModal
          mealId={id}
          mealName={name}
          openModal={() => (showEditModal.value = true)}
          closeModal={onCloseEdit}
        />
      )}
    </section>
  );
}
