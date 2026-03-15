export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">SM</h2>
          <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
            Built with React, TypeScript, Three.js and Tailwind CSS.
            Designed for high performance and interactive storytelling.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#blogs" className="hover:text-indigo-400 transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {currentYear} Shivam Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
