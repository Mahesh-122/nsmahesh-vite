import { Modal } from "react-bootstrap";
import circleclose from "../components/assets/images/close-circle.svg";

function openModal({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="header-modal">
        <b className="nav-content-title "> {title} </b>
        <img
          src={circleclose}
          className="close-circle"
          onClick={() => closeModal()}
          alt="img"
        />

        {/* <button className="closeEdit" onClick={() => closeModal(false)}>x</button> */}
      </div>
      <div className=" inner-container-modalpopup">
        <h6 className="deleteFont">
          {message}
        </h6>
      </div>
      <Modal.Footer className="justify-content-center">
        <button
          onClick={() => onConfirm()}
          type="submit"
          className=" btn  btn-primary mr-2"
        >
          Yes
        </button>
        <button
          onClick={() => {
            closeModal();
          }}
          type="submit"
          className=" btn  btn-primary "
        >
          No
        </button>
      </Modal.Footer>
    </div>
  );
}

export default DeleteModal;
