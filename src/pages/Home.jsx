import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">مرحبًا بك</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/workouts")}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          مستخدم عادي
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          دخول الأدمن
        </button>
      </div>
    </div>
  );
}

export default Home;
