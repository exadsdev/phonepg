"use client";

import React, { useEffect, useState } from "react";
 

const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg","7.jpg", "8.jpg", "9.jpg", "10.jpg"];
const idMapping = [1, 2, 3, 4, 5, 6, 7 , 8, 9 ,10];

export default function Header() {
  const [weburl, setWeburl] = useState("");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URLA?.replace(/\/$/, "") || "";
    if (!apiUrl) console.error("NEXT_PUBLIC_API_URLA is not set in .env.local");
    setWeburl(apiUrl);

    // ❄️ สร้างเกล็ดหิมะตกแบบสุ่ม
    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent = "❄";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = 5 + Math.random() * 10 + "s";
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = 12 + Math.random() * 14 + "px";
      snowContainer.appendChild(snowflake);
    }

    return () => {
      snowContainer.remove();
    };
  }, []);

  const handleClick = (index) => {
    if (!weburl) return console.error("Web URL is not set");
    const id = idMapping[index] || 1;
    const targetUrl = `${weburl}/cart.php?id=${id}&ref=mobile`;
    window.open(targetUrl, "_blank");
  };

  return (
    <header id="header" className="snow-bg">
      <div className="Clickitem">
        <div className="item">
          {imgs.map((item, index) => (
            <div key={item} onClick={() => handleClick(index)} className="image-box">
              <img
                src={weburl ? `${weburl}/img/phone/${item}` : "/img/phone-1.jpg"}
                alt={item}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/phone-1.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
