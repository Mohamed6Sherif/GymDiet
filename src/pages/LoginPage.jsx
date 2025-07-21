import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../assets/trainer.png";

function LoginPage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const SECRET_CODE = "123123"; // الكود السري الثابت

  const handleLogin = () => {
    if (code === SECRET_CODE) {
      localStorage.setItem("role", "admin");
      navigate("/admin-dashboard");
    } else {
      toast.error("❌ الكود غير صحيح");
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* خلفية الصورة */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* طبقة تعتيم على الصورة */}
      <div className="absolute inset-0 bg-black/50" />

      {/* محتوى صفحة تسجيل الدخول */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <ToastContainer />
        <div className="bg-white p-6 rounded shadow max-w-sm w-full space-y-4">
          <h2 className="text-xl font-bold text-center">كود المدرب</h2>
          <input
            type="text"
            placeholder="أدخل كود الدخول (6 أرقام)"
            maxLength={6}
            className="w-full border border-gray-300 p-2 rounded text-center tracking-widest text-lg"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            دخول
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
