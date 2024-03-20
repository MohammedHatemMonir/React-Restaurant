import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MealDetailsModal({ openModal, closeModal }) {
  const MyVerticallyCenteredModal = () => (
    <Modal
      show={openModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Meal Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <div className="item-cover">
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="close-modal"
            >
              <svg viewBox="0 0 25 25">
                <use xlinkHref="#close" />
              </svg>
            </button>
            <div className="image image-ratio ratio-dish-cover">
              <div className="ratio-content">
                <img
                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/04234959-eccc-4c09-bf71-3c3b0ea3d36b.jpg"
                  alt="Classic Nachos"
                  className="v-center"
                />
              </div>
            </div>
          </div>
          <div className="modal-body">
   
            
            <div className="item-header">
              <h3 className="title">Classic Nachos</h3>
            </div>
            <p className="item-description">
              12 pieces of tortilla bread with mix cheese, mashed black beans,
              queso and jalapenos, served with sour cream and pico salad
            </p>
            <div className="item-actions">
              <div className="reactions">
                <button
                  type="button"
                  disabled="disabled"
                  className="action-btn reaction-btn like-btn"
                >
                  <span className="icon">
                    <svg viewBox="0 0 25 25">
                      <use xlinkHref="#like" />
                    </svg>
                  </span>
                  <span className="count">323</span>
                </button>
              </div>
              <div className="item-sizes">
                <ul className="sizes-list custom-radio-group">
                  <li className="size">
                    <label className="size-option toggle-active custom-radio-holder active">
                      <p className="input-label">Regular</p>
                    </label>
                    <div className="price pull-right">
                      <span className="cost"> 258.93</span>
                      <span className="currency">EGP</span>
                    </div>
                  </li>
                </ul>
              </div>{" "}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <MyVerticallyCenteredModal onHide={() => closeModal} />
    </>
  );
}

export default MealDetailsModal;
