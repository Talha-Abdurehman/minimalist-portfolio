import { NavLink } from "react-router-dom";

export default function Loading() {
  return (
    <div className="w-screen h-screen fixed inset-0 bg-black flex flex-col items-center justify-center gap-3">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          ` text-7xl text-center hover:-translate-y-3 transition-all duration-300 ease-out ${
            isActive ? "w-screen text-black bg-white" : "text-white bg-black"
          }`
        }
      >
        HOME
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `text-white text-7xl ${
            isActive ? "bg-white w-screen" : ""
          } hover:-translate-y-3 transition-all duration-300 ease-out`
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to={"/work"}
        className={({ isActive }) =>
          `text-white text-7xl ${
            isActive ? "border-b-2 border-b-white" : ""
          } hover:-translate-y-3 transition-all duration-300 ease-out`
        }
      >
        WORK
      </NavLink>
    </div>
  );
}
