import { Outlet } from "react-router-dom";

/**
 * PublicRoutes
 * Renders child routes without any authentication check.
 * Accessible by everyone regardless of login state.
 */
const PublicRoutes = () => {
  return <Outlet />;
};

export default PublicRoutes;
