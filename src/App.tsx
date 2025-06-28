import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Providers from "./Providers";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/user/:username" element={<UserDetails />} /> */}
        {/* <Route path="/user/:username/repo/:repoName" element={<RepoDetails />} /> */}
      </Routes>
    </Providers>
  );
}
