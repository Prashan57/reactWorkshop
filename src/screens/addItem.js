import React from "react";
import Layout from "../layout/layout";
import FormNow from "../components/newForm";
import ItemListNow from "../components/newList";
import ItemModal from "../modal/itemModal";
import { contentAlignment } from "../styles/styles";

const AddItems = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
        }}
      >
        <ItemModal />
        <ItemListNow />
      </div>
    </Layout>
  );
};

export default AddItems;
