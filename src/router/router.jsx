import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
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
import AboutUs from "../pages/AboutUs ";
import PrivateRoute from "../routes/PrivateRoute";

export const fetchEventsLoader = async () => {
  try {
    const res = await axios.get(" https://goathlete-server-site.vercel.app/events", { withCredentials: true });
    console.log("Data fetched successfully in loader:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const allEventsLoader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  try {
    const res = await axios.get(` https://goathlete-server-site.vercel.app/events?search=${search}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Error fetching filtered events:", error);
    return [];
  }
};

export const eventDetailsLoader = async ({ params }) => {
  try {
    const res = await axios.get(` https://goathlete-server-site.vercel.app/events/${params.id}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("EventDetails loader failed:", error);
    throw new Response("Not Found", { status: 404 });
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
        loader: fetchEventsLoader,
        element: <Home />,
      },
      {
        path: "create-events",
        element: (
          <PrivateRoute>
            <CreateEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "all-events",
        loader: allEventsLoader,
        element: <AllEvents />,
      },
      {
        path: "events/:id",
        loader: eventDetailsLoader,
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "my-events",
        element: (
          <PrivateRoute>
            <MyCreatedEvents />
          </PrivateRoute>
        ),
      },
      {
        path:"/about-us",
        element:<AboutUs></AboutUs>,

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
