'use client';
import React from 'react';

export default function ResponsiveYouTube({
  videoId,
  src,
  title = 'YouTube video player',
  autoplay = false,
  start = 0,
  aspectRatio = 16 / 9, // 16:9
}) {
  const baseSrc =
    src || (videoId ? `https://www.youtube.com/embed/${videoId}` : 'about:blank');

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    start: String(start || 0),
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });

  const finalSrc = baseSrc.includes('?') ? `${baseSrc}&${params}` : `${baseSrc}?${params}`;
  const padTop = `${100 / aspectRatio}%`; // 56.25% สำหรับ 16:9

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        paddingTop: padTop,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <iframe
        src={finalSrc}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 0,
          display: 'block',
        }}
      />
    </div>
  );
}
