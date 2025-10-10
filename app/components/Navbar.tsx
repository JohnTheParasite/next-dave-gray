import Link from "next/link";
import React from "react";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-items-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Home
          </Link>
        </h1>
        <div className="flex flex-row justify-center items-center sm:justify-evenly text-white w-full gap-4">
          <FaYoutube />
          <FaTwitter />
          <FaGithub />
          <FaLaptop />
        </div>
      </div>
    </nav>
  );
}
