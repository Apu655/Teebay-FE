import { UserContext } from "@/Context/UserContext";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const {user} = useContext(UserContext)
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
