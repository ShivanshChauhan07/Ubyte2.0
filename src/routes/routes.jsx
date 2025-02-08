import { createBrowserRouter } from "react-router";
//import About from "../pages/About";
//import ProjectPage from "../pages/ProjectPage";
//import App from "../App";
//import Body from "../components/Body/Body";
import React from "react";
//import Error from "../pages/Error";
//import Shop from "../pages/Shop";
//import ProductPage from "../pages/ProductPage";
const App = React.lazy(() => import("../App"));
const Body = React.lazy(() => import("../components/Body/Body"));
const Shop = React.lazy(() => import("../pages/Shop"));
const ProductPage = React.lazy(() => import("../pages/ProductPage"));
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
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
