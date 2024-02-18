import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layout";
import Home from "~/pages/Home";
import CountrySelect from "~/pages/List";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "page/:page",
        element: <CountrySelect />,
      },
      {
        path: "*",
        element: "404 PAGE",
      },
    ],
  },
]);

export default routes;
