"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, SparklesIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full md:px-12 z-50 backdrop-blur bg-white/10 border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 md:mr-20">
              <div className="w-9 h-9 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center">
                <SparklesIcon className="h-5 w-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  ADmyBRAND
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-300 leading-tight">
                  AI Suite
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="blog"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#faq"
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                className="text-white text-sm hover:bg-white/10 hidden sm:inline-flex cursor-pointer"
              >
                Sign In
              </Button>
              <Button className="text-sm hidden sm:inline-flex bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80 cursor-pointer">
                Start Free Trial
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[68px] left-0 right-0 z-40 backdrop-blur bg-gradient-to-r from-purple-900/80 to-pink-900/80 border-b border-white/10"
          >
            <div className="container mx-auto px-6 py-6">
              <nav className="space-y-4">
                <a
                  href="#features"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#faq"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant="ghost"
                    className="w-full text-white hover:bg-white/10 mb-2"
                  >
                    Sign In
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
