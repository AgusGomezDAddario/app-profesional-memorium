import { React, createContext, useState } from "react";

const AuthenticatorContext = createContext();

const AuthenticatorProvider = ({ children }) => {
  const [showAuthenticator, setShowAuthenticator] = useState(false);

  return (
    <AuthenticatorContext.Provider
      value={{ showAuthenticator, setShowAuthenticator }}
    >
      {children}
    </AuthenticatorContext.Provider>
  );
};

export { AuthenticatorContext, AuthenticatorProvider };
