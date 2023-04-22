import React from "react";
import { contentAlignment } from "../styles/styles";
import "../styles/button.css";
import ItemForm from "./itemForm";
import StoreContext from "../store/storeContext";
import ItemFormNow from "./itemForm";

const ItemModalContent = ({ onClose }) => {
  const { items, setItems } = React.useContext(StoreContext);
  console.log("Items : ", items);
  const onSubmit = (data) => {
    console.log("Data to be submitted : ", data);
    setItems((prevItem) => [data, ...prevItem]);
  };
  const onListChange = (data, type = "edit") => {
    console.log(data);

    if (type === "edit") {
      console.log("item is being edited");
      setItems((previousItems) => {
        return previousItems.map((each) => {
          if (
            each.itemName === data.oldData.itemName &&
            each.rating === data.oldData.rating
          ) {
            return data.newData;
          }
          return each;
        });
      });
      console.log("updated items");
    } else {
      console.log("Item is being deleted...");
      setItems((oldStateData) =>
        oldStateData.filter(
          (each) =>
            !(
              each.itemName === data.oldData.itemName &&
              each.rating === data.oldData.rating
            )
        )
      );
    }
  };
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
          <ItemFormNow onSubmit={onSubmit} />
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
