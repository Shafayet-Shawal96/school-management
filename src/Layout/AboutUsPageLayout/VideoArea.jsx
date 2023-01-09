import React from "react";

const videoAreaImage = {
  backgroundImage: `url(./assets/img/banner/video.jpg)`,
};

function VideoArea() {
  return (
    <div className="video-area bg-img pt-270 pb-270" style={videoAreaImage}>
      <div className="video-btn-2">
        <a
          className="video-popup"
          href="https://www.youtube.com/watch?v=sv5hK4crIRc"
        >
          <img
            className="animated"
            src="assets/img/icon-img/viddeo-btn.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default VideoArea;
