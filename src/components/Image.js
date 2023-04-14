import { useState } from "react";
import Modal from "./Modal";

function Image({ imgUrl }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <img src={imgUrl} alt="이미지" onClick={openModal} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} imgUrl={imgUrl} />
    </div>
  );
}

export default Image;
