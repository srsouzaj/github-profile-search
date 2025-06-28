import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Providers from "./Providers";

export default function AppRoutes() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user/:username" element={<UserDetails />} /> */}
        {/* <Route path="/user/:username/repo/:repoName" element={<RepoDetails />} /> */}
      </Routes>
    </Providers>
  );
}
