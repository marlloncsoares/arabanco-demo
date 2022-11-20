import React, { useContext } from "react";
import { DashboardLayout } from "@presentation/layouts";
import {
  SecurityContext,
  SecurityContextType,
} from "@presentation/contexts/security";
import { Navigate } from "react-router-dom";
import { RoutesMap } from "@core/routes";

const PrivateRoute: React.FC = () => {
  const { isLoggedIn } = useContext<SecurityContextType>(SecurityContext);
  return isLoggedIn ? (
    <DashboardLayout />
  ) : (
    <Navigate to={RoutesMap.auth.login} />
  );
};

export default PrivateRoute;
