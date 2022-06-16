import React from "react";
const Layout = React.lazy(() => import("../components/Layout"));
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/ProductListing"));
const Login = React.lazy(() => import("../pages/Login"));
const Signup = React.lazy(() => import("../pages/Signup"));
const PageNotFound = React.lazy(() => import("../components/pageNotFound"));

const ROUTES = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];
export default ROUTES;
