import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthenticationContext } from '../Contexts/AuthenticationContext';

function ProtectedRoute() {
  const { user } = useContext(AuthenticationContext);

  const location = useLocation();

  if (user === undefined) return null;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location.pathname }} />
  );
}

export default ProtectedRoute;
