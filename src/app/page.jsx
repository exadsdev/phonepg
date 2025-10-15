import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import Pages from "./components/Pages";
import Sliders from "./components/Sliders";
import Item from "./components/Item";
import ResponsiveYouTube from "./components/ResponsiveYouTube";

// ✅ Metadata (Next.js App Router, ใช้ JS ได้)
export const metadata = {
  title:
    "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
  description:
    "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
  keywords: [
    "PG-Phone",
    "มือถือ",
    "สมาร์ทโฟน",
    "ร้านขายมือถือ",
    "ราคามือถือ",
    "ซื้อมือถือออนไลน์",
    "ผ่อนมือถือ",
    "PG-V9",
    "PG-V9 PRO",
  ],
  openGraph: {
    title:
      "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    url: "",
    siteName: "PG Phone Pro",
    images: [
      {
        url: "/images/review.jpg",
        width: 1200,
        height: 630,
        alt: "PG Phone - สมาร์ทโฟน Android ราคาสุดคุ้ม",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    images: ["/images/review.jpg"],
  },
  alternates: {
    canonical: "",
  },
  verification: {
    google: "ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM",
  },
  icons: { icon: [{ url: "/favicon.ico" }] },
};

// ✅ Structured Data (SSR-friendly)
function StructuredData() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "PG-Phone",
    image: [
      "/images/review.jpg",
      "/images/review2.jpg",
    ],
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    brand: { "@type": "Brand", name: "PG-Phone" },
    offers: {
      "@type": "Offer",
      url: "/",
      priceCurrency: "THB",
      price: "9900",
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "PG-Phone",
        url: " ",
        logo: "/img/logo.png",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PG Phone Pro",
    url: "",
    potentialAction: {
      "@type": "SearchAction",
      target: "/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "" },
      { "@type": "ListItem", position: 2, name: "สินค้า", item: "/products" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <StructuredData />

      <Header />

      <main className="container mx-auto px-4 py-6">
        <section className="text-center">
          <h1 className="text-2xl font-semibold">PG-Phone มือถือราคาคุ้มค่า</h1>

          <div className="review mx-auto my-4" style={{ maxWidth: 720 }}>
            <Image
              src="/img/review.jpg"
              alt="PG-Phone มือถือราคาคุ้มค่า"
              className="review-img"
              width={720}
              height={405}
              priority
            />
          </div>
        </section>

        <hr className="my-6" />

        {/* ✅ วิดีโอ: ใช้คอมโพเนนต์ responsive แทน iframe คงที่ */}
        <section aria-labelledby="video-title" className="my-8">
          <h2 id="video-title" className="sr-only">วิดีโอแนะนำสินค้า</h2>
          <ResponsiveYouTube src="https://www.youtube.com/embed/vf-hIASmemU?si=Fw1mh7A02q2RwrEM" />
          {/* หรือแบบ videoId */}
          {/* <ResponsiveYouTube videoId="vf-hIASmemU" /> */}
        </section>

        <Sliders />
        <Pages />
        <Item />
      </main>

      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} PG Phone Pro | All Rights Reserved</p>
      </footer>
    </>
  );
}
