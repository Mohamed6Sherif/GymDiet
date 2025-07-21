function VideoCard({ title, videoUrl }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={title}
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default VideoCard;
