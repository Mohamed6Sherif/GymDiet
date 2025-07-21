import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
  );
}

export default AdminDashboard;
