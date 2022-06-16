import React from "react";
import { useRoutes } from "react-router-dom";
import ROUTES from "./routes";

export default function Routing() {
  console.log("Routing.js");
  const routesElement = useRoutes(ROUTES);
  return <>{routesElement}</>;
}
