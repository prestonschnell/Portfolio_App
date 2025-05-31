import React from 'react';
import './Projects.css'

const YouTubeEmbed = ({ videoId, width = "100%", height = "100%" }) => {
  return (
    <div className="youtube-container">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
