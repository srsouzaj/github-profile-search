import { Routes, Route } from "react-router-dom";

import Providers from "./Providers";
import Home from "./pages/Home";
import Repository from "./pages/Repository";

function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository/:owner/:repoName" element={<Repository />} />
      </Routes>
    </Providers>
  );
}

export default App;
