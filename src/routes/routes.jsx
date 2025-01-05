import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import ProjectPage from "../pages/ProjectPage";
import App from "../App";
import Body from "../components/Body/Body";
import Error from "../pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
