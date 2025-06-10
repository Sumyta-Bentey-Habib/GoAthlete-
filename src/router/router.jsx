import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import EventPage from "../pages/EventPage";
import CreateEvents from "../pages/CreataEvents"; 
import AllEvents from "../pages/AllEvents";

const fetchEvents = async () => {
  try {
    const response = await fetch('http://localhost:3000/events');
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }
    const data = await response.json();
    console.log("Data fetched successfully in loader:", data);
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: fetchEvents,   
        element: <Home />,
      },
      {
        path: "eventspage",
         loader: fetchEvents, 
        element: <EventPage />,
      },
      {
        path: "create-events",
        element: <CreateEvents />,
      },
      {
        path: "all-events",
        loader: fetchEvents,   
        element: <AllEvents />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
]);

export default router;
