import { createBrowserRouter } from "react-router";
//import About from "../pages/About";
//import ProjectPage from "../pages/ProjectPage";
//import App from "../App";
//import Body from "../components/Body/Body";
import React, { Suspense } from "react";
import Loading from "../pages/Loading";
//import Error from "../pages/Error";
//import Shop from "../pages/Shop";
//import ProductPage from "../pages/ProductPage";
//import { Blog } from "../pages/Blog";
const App = React.lazy(() => import("../App"));
const Body = React.lazy(() => import("../components/Body/Body"));
const Shop = React.lazy(() => import("../pages/Shop"));
const ProductPage = React.lazy(() => import("../pages/ProductPage"));
const About = React.lazy(() => import("../pages/About"));
const ProjectPage = React.lazy(() => import("../pages/ProjectPage"));
const Error = React.lazy(() => import("../pages/Error"));
const Blog = React.lazy(() => import("../pages/Blog"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/project",
        element: (
          <Suspense fallback={<Loading />}>
            <ProjectPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<Loading />}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
