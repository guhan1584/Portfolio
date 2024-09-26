import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [{ path: "/Resume", element: <Resume /> }],
  },
]);

export default router;
