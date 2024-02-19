import React from "react";
import ReactPlayer from "react-player";

const Video = ({ src }: { src: string }) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <ReactPlayer height="100%" width="100%" url={src} controls />
    </div>
  );
};

export default Video;
