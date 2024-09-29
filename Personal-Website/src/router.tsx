import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   children: [],
  // }
  {
    children: [],
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [],
  },
]);

export default router;
