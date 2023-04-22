import React, { useContext } from "react";
import { ItemContext } from "../context/itemContext";

export default function ItemListNow() {
  const { items, deleteItem, updateItem } = useContext(ItemContext);
  console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div>
            <ul>{item.name}</ul>
            <li key={item.id}>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem({ ...item, name: e.target.value })}
              />
              <li>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
