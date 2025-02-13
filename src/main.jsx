import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
//import App from "./App.jsx";
import routes from "./routes/routes";
import Loading from "./pages/Loading";
const App = React.lazy(() => import("./App"));
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes}></RouterProvider>
    </Suspense>
  </StrictMode>
);
