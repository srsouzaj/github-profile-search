import { Outlet } from "react-router-dom";
import Providers from ".";
import Home from "@/pages/Home";
import Repository from "@/pages/Repository";

const routes = [
  {
    path: "/",
    element: (
      <Providers>
        <Outlet />
      </Providers>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/repository/:owner/:repoName", element: <Repository /> },
    ],
  },
];

export default routes;
