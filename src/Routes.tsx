import React from "react";
import { createBrowserRouter } from "react-router-dom";

const AppComponent = React.lazy(() => import("./App"));

const loader = async () => {
  return null;
};

const Routes = createBrowserRouter(
  [
    {
      path: "/login",
      element: <></>,
    },
    {
      path: "/",
      element: <AppComponent />,
      errorElement: <p>Error..!</p>,
      loader,
      children: [
        {
          index: true,
          element: <></>,
          loader,
        },
      ],
    },
  ],
  { basename: `/${import.meta.env.VITE_BASE_ROUTE_PATH}` },
);

export default Routes;
