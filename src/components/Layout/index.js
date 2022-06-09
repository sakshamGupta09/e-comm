import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
const Header = React.lazy(() => import("../Header"));
const Footer = React.lazy(() => import("../Footer"));

export default function Layout() {
  console.log("Layout.js");
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
