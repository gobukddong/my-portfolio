import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains-mono' });
const notoSerifKr = Noto_Serif_KR({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: '--font-noto-serif-kr',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Yang's Portfolio",
  description: "Portfolio of Yang, Security Researcher & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${jetbrainsMono.variable} ${notoSerifKr.variable} font-serif bg-slate-950 text-slate-100 overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
