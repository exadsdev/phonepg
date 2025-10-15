"use client"; // ทำให้เป็น Client Component

import React from "react";
import Script from "next/script";


export default function VideoPage() {
  return (
    <>
      <title> วีดีโอรีวิวโทรศัพท์มือถือ PG V9 | รีวิวสมาร์ทโฟน </title>
 <meta name="description" content="ชมรีวิวโทรศัพท์มือถือ PG V9 ที่ดีที่สุด ฟีเจอร์เด่น ประสิทธิภาพสูง รองรับทุกอุปกรณ์!" />
 <meta name="keywords" content="รีวิวโทรศัพท์ PG V9, รีวิวมือถือ, PG V9, โทรศัพท์มือถือ" />

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "รีวิวโทรศัพท์มือถือ PG V9",
          "description": "ชมรีวิวสมาร์ทโฟน PG V9 ฟีเจอร์เด่น แบตอึด กล้องชัด พร้อมประสิทธิภาพแรง!",
          "thumbnailUrl": "https://myphonepg.shop/img/video-thumbnail.jpg",
          "uploadDate": "2025-02-12T12:00:00+00:00",
          "contentUrl": "https://myphonepg.shop/img/pgv9.mp4",
          "embedUrl": "https://myphonepg.shop/videos",
          "publisher": {
            "@type": "Organization",
            "name": "Your Website",
            "logo": {
              "@type": "ImageObject",
              "url": "https://myphonepg.shop/img/logo.png"
            }
          }
        })}
      </Script>

  
  
      <div className="container my-5">
        <h1 className="text-center mb-4">รีวิวโทรศัพท์มือถือ PG V9</h1>

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

      
        <div className="row justify-content-center mt-4">
          <div className="col-md-8 col-12">
            <h2 className="text-center">ฟีเจอร์เด่นของ PG V9</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">📱 หน้าจอ AMOLED ขนาด 6.5 นิ้ว</li>
              <li className="list-group-item">🔋 แบตเตอรี่ความจุ 5000mAh</li>
              <li className="list-group-item">📷 กล้องหลัง 108MP + Ultra Wide</li>
              <li className="list-group-item">⚡ รองรับชาร์จเร็ว 65W</li>
              <li className="list-group-item">🔒 ระบบสแกนนิ้วใต้หน้าจอ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
<a className="btn btn-info" href="/">Go To Home Page</a>
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
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
        }

        h2 {
          margin-top: 20px;
          font-size: 1.8rem;
        }

        .list-group-item {
          font-size: 1.2rem;
          padding: 10px;
        }
      `}</style>
    </>
  );
}
