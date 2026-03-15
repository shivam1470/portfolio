export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 text-white bg-transparent z-50">
      <h1 className="font-bold text-xl">SM</h1>

      <div className="flex gap-6 text-sm items-center">
        <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
        <a href="#blogs" className="hover:text-indigo-400 transition-colors">Blogs</a>
        <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
        <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        <a 
          href="/resume.pdf" 
          download="Shivam-Mishra-Resume.pdf"
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-all"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}