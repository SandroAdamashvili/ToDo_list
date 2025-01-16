import { useState } from "react";
import Search from "../assets/search-icon.svg";
import Filter from "./Filter";
import MoonIcon from "../assets/moon-icon.svg";
import SunIcon from "../assets/sun-icon.svg";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(darkMode ? false : true);
  }

  return (
    <div className="flex flex-row gap-4">
      <div className="border border-[#6C63FF] rounded-[5px] flex flex-row px-4 py-2 justify-between w-full">
        <input
          type="text"
          placeholder="Search note..."
          className="placeholder:text-[#C3C1E5] outline-none w-full"
        />
        <img src={Search} alt="search icon" className="w-[21px]" />
      </div>
      <Filter />
      <div
        className="p-4 bg-[#6C63FF] rounded-md flex justify-center hover:cursor-pointer"
        onClick={handleDarkMode}
      >
        <img src={darkMode ? SunIcon : MoonIcon} alt="mode icon" />
      </div>
    </div>
  );
}
