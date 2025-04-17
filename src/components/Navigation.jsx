import { useState } from "react";
import Loading from "../pages/Loading";
import NavMenu from "./NavMenu";
import { AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0">
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-2">
          <h1 className="font-playfair ">Talha Abdurehman</h1>
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
