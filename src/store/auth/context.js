import React from "react";

const AuthContext = React.createContext({
  userDetails: {},
  login: (userDetails) => {},
  signup: (userDetails) => {},
  logout: () => {},
});
AuthContext.displayName = "AuthContext";

export default AuthContext;
