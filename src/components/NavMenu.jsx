import { useState } from "react";
import Loading from "../pages/Loading";

export default function NavMenu() {
  const [isOpened, setIsOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
    if (isOpened && isHovered === true) console.log("Both On");
    else {
      console.log("Both off");
    }
  };

  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`relative w-10 flex items-end justify-center cursor-pointer  transition-all duration-150 p-8 z-20 ${
          isOpened ? "hover:bg-white" : "hover:bg-black"
        }`}
        onClick={handleOpen}
      >
        <span
          className={`absolute h-1  w-10 rounded-2xl transition-all ease-in-out duration-150
            ${isOpened ? "rotate-45 bg-white " : "-translate-y-3"}
            ${isHovered ? "bg-white" : ""}
            ${!isHovered && !isOpened ? "bg-black" : "bg-black"}`}
        ></span>
        <span
          className={` absolute h-1 w-10 rounded-2xl transition-all ease-in-out duration-150
            ${isOpened ? "opacity-0" : "opacity-100"}
            ${isHovered ? "bg-white" : "bg-black"}`}
        ></span>
        <span
          className={`absolute h-1  w-10 rounded-2xl transition-all ease-in-out duration-150
            ${isOpened ? "-rotate-45 bg-white" : "translate-y-3"}
            ${isHovered ? "bg-white" : "bg-black"}`}
        ></span>
      </div>
    </div>
  );
}
