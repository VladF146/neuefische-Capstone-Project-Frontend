import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../Contexts/AuthenticationContenxt";

function ProtectedRoute({ component, unprotected }) {
  const { user } = useContext(AuthenticationContext);

  if (unprotected) {
    if (user) {
      return <Navigate to="/notes" />;
    }
    return component;
  }
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return component;
}

export default ProtectedRoute;
