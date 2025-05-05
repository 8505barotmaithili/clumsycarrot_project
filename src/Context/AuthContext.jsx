import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Services/firebase"; // Firebase auth import
import { signOut } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // UseEffect to manage user state
  useEffect(() => {
    // Firebase listener for auth state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  // Logout function
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        setUser(null); // Reset the user state after logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
