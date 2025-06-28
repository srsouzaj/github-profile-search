import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Providers from "./Providers";
import Home from "./pages/Home";
import Repository from "./pages/Repository";

export default function AppRoutes() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/repository/:id" element={<Repository />} />
      </Routes>
    </Providers>
  );
}
