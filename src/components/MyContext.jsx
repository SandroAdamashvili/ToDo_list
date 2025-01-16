import { createContext, useState } from "react";

export const FilterCtx = createContext({
  filter: "All",
  clicked: false,
  handleFilter: () => {},
  handleClick: () => {},
});

export default function MyContext({ children }) {
  const [clicked, setClicked] = useState(false);
  const [filter, setFilter] = useState("All");

  function handleClick() {
    clicked ? setClicked(false) : setClicked(true);
  }

  function handleFilter(filterName) {
    setFilter(filterName);
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <FilterCtx.Provider value={{ filter, clicked, handleClick, handleFilter }}>
      {children}
    </FilterCtx.Provider>
  );
}
