import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, cubicBezier } from "framer-motion";

export default function Loading() {
  const customEase = cubicBezier(0.43, 0.13, 0.23, 0.96);

  const menuVariants = {
    hidden: { opacity: 0, y: -3000 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: customEase,
      },
    },
    exit: {
      opacity: 1,
      y: -3000,
      transition: {
        duration: 1,
        ease: customEase,
        opacity: { duration: 0.7 },
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-screen h-screen fixed inset-0 bg-black flex flex-col items-center justify-center gap-3"
    >
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
    </motion.div>
  );
}
