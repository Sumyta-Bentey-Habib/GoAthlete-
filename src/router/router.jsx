import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import EventPage from "../pages/EventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/eventspage",
        element: <EventPage></EventPage>,
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
