import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Vector1 from "@/public/Vector1.svg";
import Vector2 from "@/public/Vector2.svg";

const montserrat = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(montserrat.variable, "antialiased relative min-h-screen")}
      >
        <div className="max-w-[1200px] min-h-screen flex flex-col items-center mx-auto">
          {children}
        </div>
        <Image
          src={Vector1}
          className="absolute bottom-0 left-0 w-full"
          alt=""
        />
        <Image
          src={Vector2}
          className="absolute bottom-0 left-0 w-full"
          alt=""
        />
      </body>
    </html>
  );
}
