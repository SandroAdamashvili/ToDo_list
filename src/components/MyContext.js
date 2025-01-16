import { createContext } from "react";

export const FilterCtx = createContext({
  filter: "All",
  clicked: false,
  handleFilter: () => {},
  handleClick: () => {},
});
