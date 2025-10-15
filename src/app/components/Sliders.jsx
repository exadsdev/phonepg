"use client";
import { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
const images = [
  "img/slider/showcase-1.png",
  "img/slider/showcase-2.png",
  "img/slider/showcase-3.png",
  "img/slider/showcase-4.png",
  "img/slider/showcase-5.png",
  "img/slider/showcase-6.png",
  "img/slider/showcase-7.png",
  "img/slider/showcase-8.png",


];

const Sliders = () => {
  const [index, setIndex] = useState(0);
  const imagesPerSlide = 4; // แสดงทีละ 4 รูป
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 2000); // เปลี่ยนทุก 3 วินาที

    return () => clearInterval(interval);
  }, []);

  return (

    <> 

    <div className="container">  

    <div className={styles.slideshow}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${index * (100 / imagesPerSlide)}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {images.map((src, i) => (
          <div key={i} className={styles.slide}>
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}

        
      
      </div>
      </div>
      </div>
     
     
  </>
  );
};

export default Sliders;
