import { useState } from "react";
import { createPortal } from "react-dom";

import ItemModalContent from "./itemModalContent";
import "../styles/modal.css";
import "../styles/button.css";

export default function ItemModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        class="button"
        style={{ verticalAlign: "middle" }}
        onClick={() => setShowModal(true)}
      >
        <span>Add Item</span>
      </button>
      {showModal &&
        createPortal(
          <ItemModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
