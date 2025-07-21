import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black">
      {/* الخلفية */}
      <img
        src="../assets/background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* طبقة تغطية غامقة فوق الخلفية */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-8 drop-shadow-md">
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
            دخول الأدمن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
