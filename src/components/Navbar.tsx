import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-4 text-white bg-black/50 backdrop-blur-lg z-50 border-b border-white/5">
      <h1 className="font-bold text-2xl tracking-tighter">SM</h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-sm items-center">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-indigo-400 transition-colors font-medium">
            {link.name}
          </a>
        ))}
        <a 
          href="/resume.pdf" 
          download="Shivam-Mishra-Resume.pdf"
          className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl transition-all font-semibold text-xs uppercase tracking-widest shadow-lg shadow-indigo-600/20"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium hover:text-indigo-400 py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                download="Shivam-Mishra-Resume.pdf"
                className="bg-indigo-600 text-center py-4 rounded-xl font-bold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
