import { createBrowserRouter } from "react-router";
//import About from "../pages/About";
//import ProjectPage from "../pages/ProjectPage";
import App from "../App";
import Body from "../components/Body/Body";
import React from "react";
//import Error from "../pages/Error";
const About = React.lazy(() => import("../pages/About"));
const ProjectPage = React.lazy(() => import("../pages/ProjectPage"));
const Error = React.lazy(() => import("../pages/Error"));

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
