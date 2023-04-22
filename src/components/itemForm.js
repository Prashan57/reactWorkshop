import React, { useContext, useState } from "react";
import { ItemContext } from "../context/itemContext";

export default function ItemFormNow() {
  const [itemName, setItemName] = useState("");
  const { addItem } = useContext(ItemContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name: itemName, id: Date.now() });
    setItemName("");
    console.log("form submission", itemName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
