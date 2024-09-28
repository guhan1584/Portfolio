import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/resume",
    element: <Resume />,
    children: [],
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [],
  },
]);

export default router;
