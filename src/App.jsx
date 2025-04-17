import { Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading";
import Home from "./pages/Home";
export default function App() {
  return (
    <Routes>
      <Route index Component={Home} />
      <Route path="/loading" Component={Loading} />
    </Routes>
  );
}
