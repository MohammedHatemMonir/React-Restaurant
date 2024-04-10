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
  console.log(name, id);
  return (
    <>
      <Link
        to={`/restaurant/${id}/${name}`}
        className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16"
        // style={{background:"#ebebeb"}}
      >
        <div className="card-inner">
          <img
            src={
              MealImg ||
              `https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/92edf264-8a29-4efb-997a-ca2fdf9b3a92.jpg`
            }
            alt={name}
            style={{ width: "100%" }}
          />
          <div className="card-content clickable-item pt-1">
            <Link className="clickable-anchor  " />
            <div>
              <div className="pull-right flip">
                <div
                  data-v-34cbeed1=""
                  className="vue-star-rating vue-star-rating-inline"
                >
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
                <img
                  alt={name}
                  className="b-lazy"
                  src={
                    ResImg ||
                    `https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/15ecd61e-51fe-44be-9e09-46d6d6cd1f9e.jpg`
                  }
                />
              </div>
            </div>
            <div className="main-data">
              <h3 className="card-title">{name}</h3>
              <ul className="cuisines-list h-dots-list truncate p-0 ">
                <li className="list-item">American</li>
              </ul>
              <span title="staticContent.filters.onlinePayment">
                <span
                  className="icon online-payment-icon"
                  style={{ transform: "scale(1.3)" }}
                >
                  <IoMdCard />
                </span>
              </span>
            </div>
          </div>
          {UserData.value.role == "ADMIN" && (
            <div className="position-relative">
              <Row
                className="justify-content-between"
                style={{ transform: "scale(1.4)", margin: "3px 40px 5px 40px" }}
              >
                <Col sm={6} className="text-start">
                  <div onClick={onOpenDel}>
                    <DeleteIcon className="delete-icon" />
                  </div>
                </Col>
                <Col sm={6} className="text-end">
                  <div onClick={onOpenEdit}>
                    <EditIcon className="edit-icon" />
                  </div>
                </Col>
              </Row>
            </div>
          )}
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
    </>
  );
}
