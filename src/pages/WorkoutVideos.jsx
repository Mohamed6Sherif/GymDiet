import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";

function WorkoutVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(stored);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">فيديوهات التمارين</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutVideos;
