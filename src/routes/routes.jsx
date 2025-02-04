import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import ProjectPage from "../pages/ProjectPage";
import App from "../App";
import Body from "../components/Body/Body";
import Error from "../pages/Error";
import Shop from "../pages/Shop";
import ProductPage from "../pages/ProductPage";

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
        path: "/product",
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
