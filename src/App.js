import React from "react";
import Loader from "./components/loader";
const CartProvider = React.lazy(() => import("./store/cart/ContextProvider"));
const AuthProvider = React.lazy(() => import("./store/auth/ContextProvider"));

const Routing = React.lazy(() => import("./routing"));

export default function App() {
  console.log("App.js");
  return (
    <React.Suspense fallback={<Loader />}>
      <AuthProvider>
        <CartProvider>
          <React.Suspense fallback={<Loader />}>
            <Routing />
          </React.Suspense>
        </CartProvider>
      </AuthProvider>
    </React.Suspense>
  );
}
