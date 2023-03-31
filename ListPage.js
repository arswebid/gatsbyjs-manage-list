import React from "react";
import List from "../components/List";
import AddToList from "../components/AddToList";

const ListPage = () => {
  return (
    <div>
      <h1>List Manager</h1>
      <List />
      <AddToList />
    </div>
  );
};

export default ListPage;
