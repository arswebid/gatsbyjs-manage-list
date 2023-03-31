import React, { useState, useContext } from "react";
import { ListContext } from "./ListContext";

const AddToList = () => {
  const [item, setItem] = useState("");
  const { addToList } = useContext(ListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addToList(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
      </label>
      <button type="submit
