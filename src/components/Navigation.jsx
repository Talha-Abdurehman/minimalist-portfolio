import { useState } from "react";
import Loading from "../pages/Loading";
import NavMenu from "./NavMenu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen bg-amber-300">
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-2">
          <h1 className="font-playfair ">Talha Abdurehman</h1>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <NavMenu />
        </div>
      </div>
      <div>{isOpen && <Loading />}</div>
    </div>
  );
}
