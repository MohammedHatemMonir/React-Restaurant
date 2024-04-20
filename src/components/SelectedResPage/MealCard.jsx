import Stars from "../Stars/Stars";
import { UserData } from "../../Globals";
import { useSignal } from "@preact/signals-react";
import MealDetailsModal from "./MealDetailsModal";
import DeleteIcon from "./../../Icons/DeleteIcon";
import EditIcon from "./../../Icons/EditIcon";
import DeleteMealModal from "./DeleteMealModal";
import EditMealModal from "./EditMealModal";
import "../ResPage/ResCard.scss";
import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaCompass,
  FaPlus,
  FaPlusSquare,
  FaReadme,
  FaTag,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { HiPlusCircle } from "react-icons/hi2";
import { IoMdArrowDropdownCircle } from "react-icons/io";
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
      className="blogs "
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
        MealComments={MealComments}
        resID={resID}
        resName={resName}
        rating={rating}
        desc={desc}
        price={price}
        name={name}
      />
      <div className="text-decoration-none box-container">
        <div className="text-decoration-none box">
          <div className="image">
            <br />
            <h3 style={{ background: "white" }}>
              <Stars stars1={rating} /> <br />
              <br />
            </h3>
            <img
              src={
                mealImg ||
                `https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/92edf264-8a29-4efb-997a-ca2fdf9b3a92.jpg`
              }
              alt="Res-Img"
            />
          </div>
          <div className="text-decoration-none content">
            <div className="text-decoration-none tags">
              <Link>
                <FaTag className="text-decoration-none" /> food /
              </Link>
              <Link>
                <FaTag className="text-decoration-none" /> burger /
              </Link>
              <Link>
                <FaTag className="text-decoration-none" /> pizza
              </Link>
            </div>
            <h3 style={{ fontSize: "25px" }}>{name}</h3>
            <p>{desc}</p>
            <Link
              onClick={() => (displayModal.value = true)}
              className="w-100 btn"
              style={{ marginTop: "-10px" }}
            >
              <span>Read More</span>
            </Link>
            {UserData.value.role == "ADMIN" && (
              <div className="position-relative">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    cursor: "pointer",
                    // marginTop: "30px",
                    // marginRight: "-20px",
                    // objectFit: "content",
                    margin: "25px -10% 0px  -10%",
                    transform: "scale(1.5)",
                  }}
                >
                  <div onClick={onOpenDel}>
                    <DeleteIcon />
                  </div>
                  <div onClick={onOpenEdit}>
                    <IoSettings />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
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
    </section>
  );
}
