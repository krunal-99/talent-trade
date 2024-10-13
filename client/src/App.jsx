import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Gig from "./pages/Gig/Gig";
import Gigs from "./pages/Gigs/Gigs";
import Orders from "./pages/Orders/Orders";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import MyGigs from "./pages/MyGigs/MyGigs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/Success/Success";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
