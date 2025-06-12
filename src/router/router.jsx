import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import LogInPage from "../pages/LogInPage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import CreateEvents from "../pages/CreataEvents";
import AllEvents from "../pages/AllEvents";
import EventDetails from "../pages/EventDetails";
import MyBookings from "../pages/MyBookings";
import MyCreatedEvents from "../pages/MyCreatedEvents";
import PrivateRoute from "../routes/PrivateRoute";

const fetchEvents = async () => {
  try {
    const response = await fetch("http://localhost:3000/events");
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
        path: "create-events",
        element: <CreateEvents />,
      },
      {
        path: "all-events",
        loader: fetchEvents,
        element: <AllEvents />,
      },
      {
        path: "events/:id",
        element: <EventDetails />,
        loader: async ({ params }) => {
          try {
            const res = await fetch(
              `http://localhost:3000/events/${params.id}`
            );
            if (!res.ok) {
              throw new Error("Event not found");
            }
            return res.json();
          } catch (error) {
            console.error("EventDetails loader failed:", error);
            throw new Response("Not Found", { status: 404 });
          }
        },
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/my-events",
        element: <MyCreatedEvents></MyCreatedEvents>,
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
