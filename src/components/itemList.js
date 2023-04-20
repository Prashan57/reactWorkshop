import React from "react";
import Item from "./item";

const ItemList = ({ list, onListChange }) => {
  if (list.length === 0) {
    return (
      <div
        style={{
          marginTop: 20,
        }}
      >
        Not items, Please Add
      </div>
    );
  }
  return (
    <div>
      {list.map((list, index) => {
        console.log("INDESSSSCCXXXX", index);
        return (
          <Item
            onChange={onListChange}
            key={`${list.title}-${index}`}
            title={list.title}
            description={list.description}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
