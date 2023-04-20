import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import IndexForm from "../components/indexForm";
import ItemList from "../components/itemList";

const Task = (
  initialTask = {
    title: "No task Added",
    description: "Add some description",
  }
) => {
  const [items, setItems] = useState([]);
  console.log("Items", items);
  const onSubmit = (data) => {
    console.log("Data to be submitted: ", data);
    setItems((prevItem) => [data, ...prevItem]);
  };
  useEffect(() => {
    if (initialTask.title) setItems(initialTask.title);
    if (initialTask.description) setItems(initialTask.description);
  }, [initialTask]);
  const onListChange = (data, type = "edit") => {
    console.log(data);
    if (type === "edit") {
      console.log("Item edited");
      setItems((previousItem) => {
        return previousItem.map((each) => {
          if (
            each.title === data.oldData.title &&
            each.description === data.oldData.description
          ) {
            return data.newData;
          }
          return each;
        });
      });
    } else {
      console.log("Item deleted");
      setItems((oldStateData) =>
        oldStateData.filter(
          (each) =>
            !(
              each.title === data.oldData.title &&
              each.description === data.oldData.description
            )
        )
      );
    }
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
        <ItemList list={items} onListChange={onListChange} />{" "}
        {/* *passing props in components */}
      </div>
    </Layout>
  );
};

export default Task;
