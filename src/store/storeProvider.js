import React, { useState } from "react";
import StoreContext from "./storeContext";
import ItemForm from "../components/itemForm";

const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");
  const [isEdited, setEdited] = useState(false);

  //states
  const changeItemName = (name) => {
    setItemName(name);
  };

  const changeItemRating = (rate) => {
    setRating(rate);
  };

  const setupError = (err) => {
    setError(err);
  };

  //items
  const Item = ({ itemName, rating, onChange }) => {
    if (isEdited) {
      <ItemForm
        initialItem={{
          itemName,
          rating,
        }}
        onSubmit={(updatedData) => {
          console.log("updated data", updatedData);
          onChange(
            {
              oldData: { itemName, rating },
            },
            { newData: updatedData }
          );
        }}
        onClose={() => {
          setEdited(false);
        }}
      />;
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
            {itemName}
          </h3>
          <p
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            {rating}
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setEdited((prev) => !prev);
              console.log("ItemforEdit", {
                itemName,
                rating,
              });
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              console.log("triggering delete:", itemName);
              onChange(
                {
                  oldData: {
                    itemName,
                    rating,
                  },
                  newData: {},
                },
                "delete"
              );
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  const ListItems = ({ list, onListChange }) => {
    if (list.length === 0) {
      return <>No items added yet.</>;
    }

    return (
      <>
        {list.map((arg, index) => {
          <Item
            onChange={onListChange}
            key={`${arg.itemName}-${index}`}
            itemName={arg.itemName}
            rating={arg.rating}
          />;
        })}
      </>
    );
  };

  return (
    <StoreContext.Provider
      value={{
        items,
        setItems,
        itemName,
        changeItemName,
        rating,
        changeItemRating,
        error,
        setupError,
        ListItems,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
