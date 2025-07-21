import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddVideo() {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(storedVideos);
  }, []);

  const handleAddVideo = () => {
    if (!title || !videoUrl) {
      return toast.error("يرجى ملء كل الحقول");
    }

    const newVideo = { title, videoUrl };
    const updated = [...videos, newVideo];
    localStorage.setItem("videos", JSON.stringify(updated));
    setVideos(updated);
    setTitle("");
    setVideoUrl("");

    toast.success("تم حفظ الفيديو بنجاح ✅");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 text-center">إضافة فيديو تمرين</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1 text-right">
          عنوان الفيديو
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded text-right"
          placeholder="مثال: تمارين البطن للمبتدئين"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1 text-right">
          رابط يوتيوب (embed)
        </label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded text-right"
          placeholder="مثال: https://www.youtube.com/embed/xxxxx"
        />
      </div>

      <button
        onClick={handleAddVideo}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        حفظ الفيديو
      </button>

      <button
        onClick={() => navigate("/workouts")}
        className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        مشاهدة الفيديوهات
      </button>
    </div>
  );
}

export default AddVideo;
