"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };
  
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 relative z-20">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-[#1B3C68] sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className={`transition-colors ${isActive("/") ? "text-[rgb(97,224,0)]" : "hover:text-[rgb(97,224,0)]"}`}>
            Premium Infotech LLC
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#1B3C68] sm:mt-0">
          <li>
            <Link href="/about" className={`transition-colors me-4 md:me-6 ${isActive("/about") ? "text-[rgb(97,224,0)]" : "hover:text-[rgb(97,224,0)]"}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy" className={`transition-colors me-4 md:me-6 ${isActive("/privacy") ? "text-[rgb(97,224,0)]" : "hover:text-[rgb(97,224,0)]"}`}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" className={`transition-colors me-4 md:me-6 ${isActive("/disclaimer") ? "text-[rgb(97,224,0)]" : "hover:text-[rgb(97,224,0)]"}`}>
              Disclaimer
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`transition-colors ${isActive("/contact") ? "text-[rgb(97,224,0)]" : "hover:text-[rgb(97,224,0)]"}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer; 