import React, { useContext } from "react";
import { ListContext } from "./ListContext";

const List = () => {
  const { list, removeFromList } = useContext(ListContext);

  return (
    <div>
      <h2>List</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeFromList(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
