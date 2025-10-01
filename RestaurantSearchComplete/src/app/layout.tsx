import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#e0e0e0" }}>
      <body
        style={{
          width: "700px",
          height: "999px",
          margin: "0 auto",
          padding: 0,
          marginTop: "139px",
          overflow: "auto",
          backgroundColor: "white",
          borderTop: "1px solid transparent",
        }}
      >
        <Script
          strategy="beforeInteractive"
          src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=15stsn568d"
        />
        {children}
      </body>
    </html>
  );
}
