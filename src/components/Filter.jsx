import ArrDown from "../assets/chevron-down.svg";
import ArrUp from "../assets/chevron-up.svg";
import { useContext, useState } from "react";
import { FilterCtx } from "./MyContext.js";

export default function Filter() {
  const { filter, clicked, handleClick, handleFilter } = useContext(FilterCtx);

  return (
    <div className="w-fit relative">
      <div
        className="bg-[#6C63FF] h-full w-fit p-[15px] rounded-[5px] text-white flex gap-4 flex-row justify-between hover:cursor-pointer"
        onClick={handleClick}
      >
        <h2
          className={`w-full text-left font-medium ${
            filter !== "All" && "text-sm"
          }`}
        >
          {filter.toUpperCase()}
        </h2>
        <img
          src={clicked ? ArrUp : ArrDown}
          alt="arrow icon"
          className="mr-2"
        />
      </div>
      <div
        className={`flex flex-col border border-[#6C63FF] bg-white rounded-[5px] w-full text-[#6C63FF] z-10 absolute text-left text-sm ${
          clicked ? "" : "hidden"
        }`}
      >
        <p
          className="px-[6px] py-2 hover:bg-[#6C63FF33] hover:cursor-pointer"
          onClick={(e) => handleFilter(e.target.innerText)}
        >
          All
        </p>
        <p
          className="px-[6px] py-2 hover:bg-[#6C63FF33] hover:cursor-pointer"
          onClick={(e) => handleFilter(e.target.innerText)}
        >
          Complete
        </p>
        <p
          className="px-[6px] py-2 hover:bg-[#6C63FF33] hover:cursor-pointer"
          onClick={(e) => handleFilter(e.target.innerText)}
        >
          Incomplete
        </p>
      </div>
    </div>
  );
}
