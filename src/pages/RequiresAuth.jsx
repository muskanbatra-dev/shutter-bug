import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth.isLoggedIn;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
