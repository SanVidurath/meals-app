//Modal.js
import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    strMeal: title,
    strMealThumb: imgSrc,
    strInstructions: method,
    strSource: source,
  } = selectedMeal;
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={imgSrc} alt="meal" className="img-fluid w-100" />
        <div className="modal-content">
          <h4 className="my-2 mb-3">{title} Cooking Instructions</h4>
          <p>{method}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <button className="btn btn-danger" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
