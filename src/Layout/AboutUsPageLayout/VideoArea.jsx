import React from "react";
import { Link } from "react-router-dom";

const videoAreaImage = {
  backgroundImage: `url(./assets/img/banner/video.jpg)`,
};

function VideoArea() {
  return (
    <div className="video-area bg-img pt-270 pb-270" style={videoAreaImage}>
      <div className="video-btn-2">
        <Link to="#" className="video-popup">
          <img
            className="animated"
            src="assets/img/icon-img/viddeo-btn.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default VideoArea;
