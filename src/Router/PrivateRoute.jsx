import { Navigate } from "react-router-dom";
import { useGlobalState } from "../Layout/GlobalState";

const PrivateRoute = ({ element }) => {
  const globalState = useGlobalState();

  return globalState.isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
