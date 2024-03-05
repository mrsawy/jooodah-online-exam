import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import { Navigate } from "react-router-dom";
import { DashboardComponent } from "./Dashboard/src/main";
import Spinner from "./components/Spinner";
import { Page404 } from "./Dashboard/src/routes/sections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "dashboard",
    element: <DashboardComponent />,
  },
  {
    path: "*",
    element: <DashboardComponent />,
  },
]);

export default router;
