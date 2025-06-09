import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import RegistrationPage from "../pages/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <LogInPage></LogInPage>,
  },
  {
    path: "/register",
    element: <RegistrationPage></RegistrationPage>,
  },
]);
export default router;
