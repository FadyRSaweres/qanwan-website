import { Navigate, Outlet } from "react-router-dom";

/**
 * ProtectedRoutes
 * Renders child routes only if a valid auth token exists in localStorage.
 * Otherwise redirects the user to the login page.
 */
const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
