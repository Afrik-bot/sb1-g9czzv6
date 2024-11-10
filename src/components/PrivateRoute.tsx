import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  // If user is authenticated and trying to access /auth, redirect to /express
  if ((location.pathname === '/auth' || location.pathname === '/') && currentUser) {
    return <Navigate to="/express" replace />;
  }

  if (!currentUser) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}