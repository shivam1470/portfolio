import CanvasContainer from "../three/components/CanvasContainer";
import HeroScene from "../three/scenes/HeroScene";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center bg-black text-white pt-24 md:pt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 px-6 md:px-8 w-full">

        {/* TOP CONTENT (on mobile) / LEFT CONTENT (on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-center md:text-left z-10"
        >
          <h2 className="text-indigo-400 text-base md:text-lg font-mono mb-2">
            Hello, I'm
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">
            Shivam Mishra
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Software Engineer specializing in React, TypeScript, Node.js and
            scalable web systems. I build performant applications and
            interactive experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition px-8 py-4 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-indigo-600/20 relative z-20">
              View Projects
            </a>

            <a 
              href="/resume.pdf" 
              download="Shivam-Mishra-Resume.pdf"
              className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:scale-105 transition px-8 py-4 rounded-xl flex items-center justify-center font-bold relative z-20"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* BOTTOM 3D SCENE (on mobile) / RIGHT 3D SCENE (on desktop) */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-full flex items-center justify-center pointer-events-none md:pointer-events-auto">
          <div className="w-full h-full pointer-events-auto">
            <CanvasContainer>
              <HeroScene />
            </CanvasContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
