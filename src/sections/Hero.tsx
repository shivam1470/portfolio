import CanvasContainer from "../three/components/CanvasContainer";
import HeroScene from "../three/scenes/HeroScene";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-gray-400 text-lg mb-2">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Shivam Mishra
          </h1>

          <p className="text-gray-300 text-lg mb-6 max-w-lg">
            Software Engineer specializing in React, TypeScript, Node.js and
            scalable web systems. I build performant applications and
            interactive experiences.
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition px-6 py-3 rounded-lg flex items-center justify-center">
              View Projects
            </a>

            <a 
              href="/resume.pdf" 
              download="Shivam-Mishra-Resume.pdf"
              className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:scale-105 transition px-6 py-3 rounded-lg flex items-center justify-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT 3D SCENE */}
        <div className="w-full h-[500px] md:h-full">
          <CanvasContainer>
            <HeroScene />
          </CanvasContainer>
        </div>

      </div>
    </section>
  );
}