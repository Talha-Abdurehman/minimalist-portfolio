import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, cubicBezier } from "framer-motion";

export default function Loading({ onClose }) {
  const customEase = cubicBezier(0.43, 0.13, 0.23, 0.96);

  const menuVariants = {
    hidden: { opacity: 0, y: -3000 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: customEase,
      },
    },
    exit: {
      opacity: 1,
      y: -3000,
      transition: {
        duration: 1,
        ease: customEase,
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-screen h-screen fixed inset-0 bg-black flex flex-col items-center justify-center gap-6"
    >
      <NavLink
        to={"/"}
        onClick={onClose}
        className={({ isActive }) =>
          ` text-5xl text-center hover:-translate-y-3 transition-all duration-300 ease-out ${
            isActive
              ? "w-screen text-black bg-amber-50 py-1"
              : "text-amber-50 bg-black"
          }`
        }
      >
        HOME
      </NavLink>

      <NavLink
        to={"/about"}
        onClick={onClose}
        className={({ isActive }) =>
          ` text-5xl text-center hover:-translate-y-3 transition-all duration-300 ease-out ${
            isActive
              ? "w-screen text-black bg-amber-50 py-2"
              : "text-amber-50 bg-black"
          }`
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to={"/work"}
        onClick={onClose}
        className={({ isActive }) =>
          ` text-5xl text-center hover:-translate-y-3 transition-all duration-300 ease-out ${
            isActive
              ? "w-screen text-black bg-amber-50 py-2"
              : "text-amber-50 bg-black"
          }`
        }
      >
        WORK
      </NavLink>
      <NavLink
        to={"/hire"}
        onClick={onClose}
        className={({ isActive }) =>
          ` text-5xl text-center hover:-translate-y-3 transition-all duration-300 ease-out ${
            isActive
              ? "w-screen text-black bg-amber-50 py-2"
              : "text-amber-50 bg-black"
          }`
        }
      >
        HIRE ME
      </NavLink>
    </motion.div>
  );
}
