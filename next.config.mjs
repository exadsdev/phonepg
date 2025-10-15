/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // ✅ วิธีที่ 1 — อนุญาตทุกโดเมน (สำหรับระหว่างพัฒนา)
    // ใช้ dangerouslyAllowSVG และ remotePatterns ว่าง เพื่อ bypass การตรวจโดเมน
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ อนุญาตทุกโดเมนที่เป็น https
      },
      {
        protocol: 'http',
        hostname: '**', // ✅ อนุญาต http ด้วย (กรณีรูปจาก localhost)
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true, // ✅ ให้ next/image โหลดภาพตรง ไม่บีบอัดตอน dev
  },
};

export default nextConfig;
