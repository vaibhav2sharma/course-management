import React, { createContext, useState, useContext } from "react";

const UserRoleContext = createContext();

export function UserRoleProvider({ children }) {
  const [role, setRole] = useState(
    localStorage.getItem("userRole") || "student"
  );

  const changeRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
  };

  return (
    <UserRoleContext.Provider value={{ role, changeRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

export function useUserRole() {
  return useContext(UserRoleContext);
}
