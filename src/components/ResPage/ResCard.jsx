import { useSignal } from "@preact/signals-react";
import { UserData } from "../../Globals";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import DeleteIcon from "../../Icons/DeleteIcon";
import DeleteResModal from "./DeleteResModal";
import EditResModal from "./EditResModal";
import DineMeLogo from "../../images/DineMeLogo.png";
import defaultMeal from "../../images/defaultMeal.jpg";
import "./ResCard.scss";
import { FaCompass, FaTag } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
export default function ResCard({
  id,
  name,
  stars1,
  ResImg,
  MealImg,
  category,
  ownerId,
}) {
  // console.log("Hema ID",id)
  const showDelModal = useSignal(false);
  const showEditModal = useSignal(false);

  // Handle open and close popup modals
  function onOpenDel(e) {
    // e.stopPropagation();
    e.preventDefault();
    showDelModal.value = true;
  }
  function onOpenEdit(e) {
    // e.stopPropagation();
    e.preventDefault();
    showEditModal.value = true;
  }

  function onCloseDel() {
    showDelModal.value = false;
  }
  function onCloseEdit() {
    showEditModal.value = false;
  }

  return (
    <section
      className="res-blogs"
      id="blogs"
      style={{ transform: "scale(0.75)" }}
    >
      <div className="text-decoration-none box-container">
        <div
          className="text-decoration-none box"
          style={{ border: `3px solid black` }}
        >
          <div className="image">
            <h3 style={{ background: "white", transform: "scale(0.9)" }}>
              <Stars stars1={stars1} /> <br />
              <br />
            </h3>
            {/* Edit for owner only */}
            {UserData.value.role === "owner" &&
              UserData.value.id === ownerId && (
                <div
                  onClick={onOpenEdit}
                  className="position-absolute top-0 end-0"
                  style={{ margin: "20px" }}
                >
                  <IoSettings
                    style={{
                      cursor: "pointer",
                      transform: "scale(3)",
                      color: "black",
                      backgroundColor: "white",
                      padding: "2px",
                      borderRadius: "50%",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              )}

            <img src={ResImg || defaultMeal} alt="Res-Img" />
          </div>

          <div className="text-decoration-none content">
            <div
              className="text-decoration-none tags"
              style={{ transform: "scale(0.97)" }}
            >
              <Link>
                <FaTag className="text-decoration-none" /> {category}
              </Link>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</h3>
            <Link to={`/restaurant/${id}/${name}`} className="w-100 btn">
              <span>
                <FaCompass />
              </span>
              <span> Explore</span>
            </Link>

            <div className="position-relative">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "25px -10% 0px  -10%",
                  transform: "scale(1.5)",
                }}
              >
                {UserData.value.role === "ADMIN" && (
                  <div onClick={onOpenDel}>
                    <DeleteIcon style={{ cursor: "pointer" }} />
                  </div>
                )}
                {/* Edit for admin only */}
                {UserData.value.role === "ADMIN" && (
                  <div onClick={onOpenEdit}>
                    <IoSettings style={{ cursor: "pointer" }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDelModal.value == true && (
        <DeleteResModal
          resId={id}
          resName={name}
          openModal={() => (showDelModal.value = true)}
          closeModal={onCloseDel}
        />
      )}
      {showEditModal.value == true && (
        <EditResModal
          resName={name}
          resId={id}
          openModal={() => (showEditModal.value = true)}
          closeModal={onCloseEdit}
        />
      )}
    </section>
  );
}
