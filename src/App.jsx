import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DietPlan from "./pages/DietPlan";
import WorkoutVideos from "./pages/WorkoutVideos";
import ProtectedRoute from "./components/ProtectedRoute";
import PrintDiet from "./pages/PrintPage";
import AddVideo from "./pages/AddVideo";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/workouts" element={<WorkoutVideos />} />
        <Route
          path="/diet"
          element={
            <ProtectedRoute>
              <DietPlan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/print"
          element={
            <ProtectedRoute>
              <PrintDiet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-video"
          element={
            <ProtectedRoute>
              <AddVideo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
