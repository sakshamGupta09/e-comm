import { useState } from "react";
import AuthContext from "./context";

function AuthProvider(props) {
  console.log("AuthProvider.js");
  const [user, setUser] = useState(null);

  const onLoginSuccess = (userDetails) => {
    setUser(userDetails);
  };
  const onSignupSuccess = (userDetails) => {
    setUser(userDetails);
  };
  const onLogout = () => {
    setUser(null);
  };
  const authData = { user, onLoginSuccess, onSignupSuccess, onLogout };
  return (
    <AuthContext.Provider value={authData}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
