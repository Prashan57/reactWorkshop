import React from "react";
import "../styles/button.css";
import FormNow from "../components/newForm";

const ItemModalContent = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormNow />
          <br />
          <button
            onClick={onClose}
            class="button"
            style={{ verticalAlign: "middle" }}
          >
            <span>Close Form</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModalContent;
