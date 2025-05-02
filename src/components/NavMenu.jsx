import { useState } from "react";

export default function NavMenu({ activeSection }) {
  const [isOpened, setIsOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
    console.log(isOpened);
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
        className={`relative w-10 flex items-end justify-center cursor-pointer  transition-all duration-150 p-8 z-20 
          ${
            isOpened
              ? isHovered
                ? "bg-amber-50"
                : "bg-neutral-900"
              : isHovered
              ? "bg-neutral-900"
              : "bg-amber-50"
          }`}
        onClick={handleOpen}
      >
        <span
          className={`absolute h-1  w-10 rounded-2xl transition-all ease-in-out duration-150
            ${isOpened ? "rotate-45 " : "-translate-y-3"}
            ${
              isOpened
                ? isHovered
                  ? "bg-neutral-900"
                  : "bg-amber-50"
                : isHovered
                ? "bg-amber-50"
                : "bg-neutral-900"
            }`}
        ></span>
        <span
          className={` absolute h-1 w-10 rounded-2xl transition-all ease-in-out duration-150
            ${isOpened ? "opacity-0" : "opacity-100"}
            ${isHovered ? "bg-amber-50" : "bg-neutral-900"}`}
        ></span>
        <span
          className={`absolute h-1  w-10 rounded-2xl transition-all ease-in-out duration-150
            ${isOpened ? "-rotate-45" : "translate-y-3"}
           ${
             isOpened
               ? isHovered
                 ? "bg-neutral-900"
                 : "bg-amber-50"
               : isHovered
               ? "bg-amber-50"
               : "bg-neutral-900"
           }`}
        ></span>
      </div>
    </div>
  );
}
