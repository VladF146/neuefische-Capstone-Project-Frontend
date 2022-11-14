import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthenticationContext } from '../Contexts/AuthenticationContext';
import Authentication from '../Pages/Authentication';

function ProtectedRoute() {
  const { user } = useContext(AuthenticationContext);

  const location = useLocation();

  if (location.pathname === '/auth') {
    if (!user) {
      return <Authentication />;
    }
    return <Navigate to={location?.state?.from || '/notes'} />;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location.pathname }} />
  );
}

export default ProtectedRoute;
