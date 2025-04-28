import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
export default function App() {
  return (
    <>
      <Home />
      <About />
    </>
  );
}
