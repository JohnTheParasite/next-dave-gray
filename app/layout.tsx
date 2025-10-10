import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivan's blog",
  description: "Created by Ivan Barbashov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
