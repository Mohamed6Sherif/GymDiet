import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role === "admin") {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRoute;
