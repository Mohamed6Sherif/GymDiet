import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DietPlan() {
  const [data, setData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    goal: "خسارة وزن",
    plan: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("dietData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("dietData", JSON.stringify(data));
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-right">نظام غذائي للعميل</h1>

      <div className="mb-4">
        <label className="block font-medium mb-1 text-right">اسم العميل</label>
        <input
          dir="auto"
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="أدخل اسم العميل"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 text-right">العمر</label>
          <input
            dir="auto"
            type="number"
            placeholder="أدخل عمر العميل"
            className="w-full border border-gray-300 p-2 rounded"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-right">
            الوزن (كجم)
          </label>
          <input
            dir="auto"
            type="number"
            placeholder="أدخل وزن العميل"
            className="w-full border border-gray-300 p-2 rounded"
            value={data.weight}
            onChange={(e) => setData({ ...data, weight: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-right">
            الطول (سم)
          </label>
          <input
            type="number"
            dir="auto"
            placeholder="أدخل طول العميل"
            className="w-full border border-gray-300 p-2 rounded"
            value={data.height}
            onChange={(e) => setData({ ...data, height: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-right">الهدف</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            value={data.goal}
            onChange={(e) => setData({ ...data, goal: e.target.value })}
          >
            <option>خسارة وزن</option>
            <option>زيادة عضلات</option>
            <option>الحفاظ على الوزن</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-right">
          الجدول الغذائي اليومي
        </h2>
        <textarea
          rows="6"
          dir="auto"
          className="w-full border border-gray-300 p-3 rounded"
          placeholder="اكتب النظام الغذائي..."
          value={data.plan}
          onChange={(e) => setData({ ...data, plan: e.target.value })}
        ></textarea>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/print", { state: data })}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          عرض النظام الغذائي
        </button>
      </div>
    </div>
  );
}

export default DietPlan;
