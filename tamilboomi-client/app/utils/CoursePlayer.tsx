import React, { FC } from "react";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  // Assuming videoUrl is a YouTube video URL like "https://www.youtube.com/watch?v=VIDEO_ID"
  const videoId = videoUrl.split("v=")[1];

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", overflow: "hidden" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default CoursePlayer;
