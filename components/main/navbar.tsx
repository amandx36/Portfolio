'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-black/65 backdrop-blur-xl">
      <div className="shell flex h-[72px] items-center justify-between">
        {/* Logo & Name */}
        <Link 
          href="#about-me" 
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={34}
            height={34}
            draggable={false}
            className="cursor-pointer"
          />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            Aman Deep
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="glass-panel hidden items-center gap-7 rounded-full px-6 py-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.title} 
              href={link.link} 
              className="text-sm font-medium text-zinc-300 transition hover:text-orange-300"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link 
              key={name} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-zinc-300 transition hover:text-orange-300"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center text-2xl text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 flex h-screen w-3/4 flex-col items-center justify-center border-l border-white/10 bg-black/90 text-zinc-300 backdrop-blur-2xl sm:w-1/2 md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-6 text-white text-3xl"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-8 text-lg font-medium">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.link} 
                  onClick={closeMenu} 
                  className="transition hover:text-orange-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-10">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link 
                  key={name} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center transition hover:text-orange-300"
                >
                  <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
