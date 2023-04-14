import ReactModal from "react-modal";

function Modal({ isOpen, onRequestClose, imgUrl }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          border: "none",
          padding: 0,
        },
      }}
    >
      <img src={imgUrl} alt="확대된 이미지" style={{ width: "100%" }} />
    </ReactModal>
  );
}

export default Modal;
