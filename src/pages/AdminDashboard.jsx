import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background.jpg";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* الخلفية */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* طبقة تعتيم */}
      <div className="absolute inset-0 bg-black/50" />

      {/* المحتوى */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold">لوحة تحكم الأدمن</h1>

          <button
            onClick={() => navigate("/diet")}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            النظام الغذائي
          </button>

          <button
            onClick={() => navigate("/add-video")}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            إضافة فيديو
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
