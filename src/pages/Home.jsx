import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        مرحبًا بك في تطبيق المدرب
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => navigate("/workouts")}
          className="bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition"
        >
          مستخدم عادي
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          دخول المدرب
        </button>
      </div>
    </div>
  );
}

export default Home;
