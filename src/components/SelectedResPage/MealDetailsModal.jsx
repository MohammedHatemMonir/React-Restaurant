import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineLike } from "react-icons/ai";

function MealDetailsModal({
  openModal,
  closeModal,
  mealName,
  mealDesc,
  mealImg,
  mealPrice,
}) {
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
            <div className="image image-ratio ratio-dish-cover">
              <div className="ratio-content">
                <img src={mealImg} alt={mealImg} className="v-center" />
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MealDetailsModal;
