import React, { useContext } from "react";
import StoreContext from "../store/storeContext";
import Layout from "../layout/layout";
import { contentAlignment } from "../styles/styles";
import ItemModal from "../components/itemModal";
import ItemList from "../components/itemList";

const ItemScreen = ({ onClose }) => {
  const { ListItems } = useContext(StoreContext);
  return (
    <Layout>
      <ItemList />
      <ListItems />
      <div style={contentAlignment}>
        <ItemModal />
      </div>
    </Layout>
  );
};

export default ItemScreen;
