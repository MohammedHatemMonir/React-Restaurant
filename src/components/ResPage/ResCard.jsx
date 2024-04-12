import { useSignal } from "@preact/signals-react";
import { Row, Col } from "react-bootstrap";
import { UserData } from "../../Globals";
import React from "react";
import { Link } from "react-router-dom";
import Stars from "./../Stars/Stars";
import { IoMdCard } from "react-icons/io";
import DeleteIcon from "./../../Icons/DeleteIcon";
import EditIcon from "./../../Icons/EditIcon";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import DineMeLogo from "../../images/DineMeLogo.png";

export default function ResCard({ id, name, start1, ResImg, MealImg }) {
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
  // console.log(name, id);
  return (
    <div className="card restaurant-card py-5">
      <Link
        to={`/restaurant/${id}/${name}`}
        // className="bg-danger"
      >
        <img
          src={
            MealImg ||
            `https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/92edf264-8a29-4efb-997a-ca2fdf9b3a92.jpg`
          }
          alt={name}
          style={{ width: "100%" }}
        />
        <div className="card-content clickable-item pt-1">
          <Link className="clickable-anchor" />
          <div>
            <div className="pull-right flip">
              <div className="vue-star-rating vue-star-rating-inline">
                <div className="vue-star-rating position-relative">
                  <div
                    style={{
                      transform: "scale(0.5)",
                      position: "absolute",
                      marginLeft: "-147px",
                      marginTop: "-6px",
                    }}
                  >
                    <Stars stars1={start1} />
                  </div>
                </div>
              </div>
              <span className="reviews-count">(1593)</span>
            </div>
          </div>
          <div className="rest-logo image-ratio ratio-square radius">
            <div className="ratio-content image-loading image-loaded">
              <img alt={name} className="b-lazy" src={ResImg || DineMeLogo} />
            </div>
          </div>
          <div className="main-data">
            <h3 className="card-title">{name}</h3>
            <ul className="cuisines-list h-dots-list truncate p-0">
              <li className="list-item">American</li>
            </ul>
            <span>
              <span
                className="icon online-payment-icon"
                style={{ transform: "scale(1.3)" }}
              >
                <IoMdCard />
              </span>
              {UserData.value.role == "ADMIN" && (
                <div className="position-relative">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transform: "scale(1.5)",
                      margin: "15px 17% -30px  17%",
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
            </span>
          </div>
        </div>
      </Link>
      {UserData.value.role == "ADMIN" && showDelModal.value == true && (
        <DeleteModal
          resId={id}
          resName={name}
          openModal={() => (showDelModal.value = true)}
          closeModal={onCloseDel}
        />
      )}
      {UserData.value.role == "ADMIN" && showEditModal.value == true && (
        <EditModal
          resName={name}
          resId={id}
          openModal={() => (showEditModal.value = true)}
          closeModal={onCloseEdit}
        />
      )}
    </div>
  );
}
