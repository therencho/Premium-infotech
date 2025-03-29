"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide navbar on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past initial 100px
          setVisible(false);
        } else {
          // Scrolling up or at the top
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };
  
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="bg-white bg-opacity-85 rounded-b-lg shadow-sm max-w-7xl mx-auto border border-gray-200 shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo and company name */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 relative mr-3">
                  <Image 
                    src="/images/logo.svg" 
                    alt="Premium Infotech Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-medium text-[#1B3C68]">Premium Infotech LLC</span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="relative px-3 py-1 text-[#1B3C68] font-medium text-sm tracking-wide"
                  >
                    <span className={`transition-colors duration-200 ${isActive(item.path) ? "text-[rgb(97,224,0)]" : "hover:text-[rgb(97,224,0)]"}`}>
                      {item.name}
                    </span>
                    
                    {/* Bottom border indicator for active */}
                    {isActive(item.path) && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)]"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-1.5 rounded-md text-[#1B3C68] hover:text-[rgb(97,224,0)]"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="block h-5 w-5" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="block h-5 w-5" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    href={item.path} 
                    onClick={toggleMenu}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`block px-3 py-2 rounded-md ${
                        isActive(item.path) 
                          ? "text-[rgb(97,224,0)] font-medium border-l border-[rgb(97,224,0)]" 
                          : "text-[#1B3C68] hover:text-[rgb(97,224,0)]"
                      }`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar; 