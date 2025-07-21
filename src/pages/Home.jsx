import { useNavigate } from "react-router-dom";
import heroImage from "../assets/background.jpg"; // تأكد إن الصورة موجودة في المسار الصحيح

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Image Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            مرحبًا بك في تطبيق المدرب
          </h1>
        </div>
      </div>

      {/* الأزرار */}
      <div className="flex flex-col gap-4 items-center mt-10 mb-10 px-4">
        <button
          onClick={() => navigate("/workouts")}
          className="bg-green-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-700 transition"
        >
          مستخدم عادي
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          دخول المدرب
        </button>
      </div>
    </div>
  );
}

export default Home;
