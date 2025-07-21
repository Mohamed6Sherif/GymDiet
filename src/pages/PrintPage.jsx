import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

function PrintPage() {
  const location = useLocation();
  const navigate = useNavigate(); // ⬅️ نستخدمه للرجوع
  const data = location.state;
  const printRef = useRef();

  const handleDownload = () => {
    const opt = {
      margin: 0.5,
      filename: `${data.name || "diet-plan"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(printRef.current).save();
  };

  if (!data)
    return <p className="text-center mt-10">لا توجد بيانات للطباعة.</p>;

  return (
    <div className="p-6">
      <div
        ref={printRef}
        className="bg-white p-6 max-w-3xl mx-auto shadow rounded text-right leading-loose"
      >
        <h2 className="text-2xl font-bold mb-4">نظام غذائي للعميل</h2>
        <p>
          <strong>الاسم:</strong> {data.name}
        </p>
        <p>
          <strong>العمر:</strong> {data.age}
        </p>
        <p>
          <strong>الوزن:</strong> {data.weight} كجم
        </p>
        <p>
          <strong>الطول:</strong> {data.height} سم
        </p>
        <p>
          <strong>الهدف:</strong> {data.goal}
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">الجدول الغذائي اليومي</h3>
          <p className="whitespace-pre-wrap" dir="auto">
            {data.plan}
          </p>
        </div>
      </div>

      {/* أزرار التحميل والرجوع */}
      <div className="text-center mt-8 flex justify-center gap-4 flex-wrap">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          تحميل الملف
        </button>

        <button
          onClick={() => navigate("/diet")}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
        >
          رجوع
        </button>
      </div>
    </div>
  );
}

export default PrintPage;
