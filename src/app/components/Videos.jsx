"use client"; // ทำให้เป็น Client Component

import React from "react";

export default function Videos() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">วีดีโอรีวิวโทรศัพท์มือถือ PG V9</h1>

      <div className="row justify-content-center">
        <div className="col-md-8 col-12">
          <div className="video-container">
            <video
              className="video-player"
              src="/img/pgv9.mp4"
              controls 
              preload="metadata"
              poster="/img/video-thumbnail.jpg"
            ></video>
          </div> 
        </div>
      </div>

<div className="text-center mt-5">

    <a className="btn btn-info" href="/Video">Full Screen Video</a>

</div>

      <style jsx>{`
        .video-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .video-player {
          width: 560px;
          height: 315px;
          display: block;
           margin: 0 auto;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
