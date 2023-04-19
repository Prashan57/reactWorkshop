import React from "react";
import { useState } from "react";
import IndexForm from "./indexForm";

const Item = ({ title, description }) => {
  const [isEdited, setEdited] = useState(false);
  if (isEdited) {
    return (
      <IndexForm
        initialData={{
          title,
          description,
        }}
        onClose={() => {
          setEdited(false);
        }}
      />
    );
  }

  return (
    <div
      style={{
        margin: "10px 0",
        border: "2px solid black",
        borderRadius: "5px",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {description}
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            setEdited((prev) => !prev);
            console.log("ItemforEdit", {
              title,
              description,
            });
          }}
        >
          Edit
        </button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Item;
