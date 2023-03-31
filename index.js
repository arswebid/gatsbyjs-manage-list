import React from "react";
import { ListProvider } from "./ListContext";

export const wrapRootElement = ({ element }) => (
  <ListProvider>{element}</ListProvider>
);
