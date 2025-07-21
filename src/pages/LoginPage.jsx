import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("role", "admin");
      navigate("/admin-dashboard");
    } else {
      alert("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full space-y-4">
        <h2 className="text-xl font-bold text-center">تسجيل دخول الأدمن</h2>
        <input
          type="text"
          placeholder="اسم المستخدم"
          className="w-full border border-gray-300 p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمة السر"
          className="w-full border border-gray-300 p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          دخول
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
