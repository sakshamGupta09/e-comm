import React from "react";
import CartProvider from "./store/cart/ContextProvider";
import AuthProvider from "./store/auth/ContextProvider";
import { Route, Routes } from "react-router-dom";
const Layout = React.lazy(() => import("./components/Layout"));
const Home = React.lazy(() => import("./pages/Home"));
const ProductListing = React.lazy(() => import("./pages/ProductListing"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Loader = React.lazy(() => import("./components/loader"));
const PageNotFound = React.lazy(() => import("./components/pageNotFound"));

export default function App() {
  console.log("App.js");
  return (
    <AuthProvider>
      <CartProvider>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="plp/:categoryId" element={<ProductListing />} />
              <Route path="plp" element={<ProductListing />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </React.Suspense>
      </CartProvider>
    </AuthProvider>
  );
}
