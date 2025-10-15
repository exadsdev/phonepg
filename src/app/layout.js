import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Footer from './components/Footer';
// การตั้งค่า font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       







        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>
           
      </head>
     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
