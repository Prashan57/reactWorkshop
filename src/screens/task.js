import React, { useState } from "react";
import Layout from "../layout/layout";
import IndexForm from "../components/indexForm";
import ItemList from "../components/itemList";

const Task = () => {
  const [items, setItems] = useState([]);
  console.log("Items", items);
  const onSubmit = (data) => {
    console.log("Data to be submitted: ", data);
    setItems((prevItem) => [data, ...prevItem]);
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IndexForm onSubmit={onSubmit} />
        <ItemList list={items} />
        {/* *passing props in components */}
      </div>
    </Layout>
  );
};

export default Task;
