import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList([...list, item]);
  };

  const removeFromList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <ListContext.Provider value={{ list, addToList, removeFromList }}>
      {children}
    </ListContext.Provider>
  );
};
