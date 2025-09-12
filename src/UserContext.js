import { createContext, useState, useEffect } from "react";
import React from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return React.createElement(
    UserContext.Provider,
    { value: { user, setUser } },
    children
  );
}
