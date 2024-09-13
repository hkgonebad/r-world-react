import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import BlankLayout from "./layouts/BlankLayout";

import Login from "./auth/Login";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
    ],
  },
  {
    path: "/login",
    element: <BlankLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);
