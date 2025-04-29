import { useState } from "react";
import Loading from "../pages/Loading";
import NavMenu from "./NavMenu";
import { AnimatePresence } from "framer-motion";

export default function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full fixed top-0 transition-all duration-300 ease-in-out ${
        activeSection === "home"
          ? "bg-amber-50 text-black"
          : "bg-black border-amber-50  text-amber-50"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-2">
          <h1 className="font-playfair text-xl font-semibold ">
            Talha <span>Abdurehman</span>
          </h1>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <NavMenu />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && <Loading onClose={() => setIsOpen(false)} key={"menu"} />}
      </AnimatePresence>
    </div>
  );
}
