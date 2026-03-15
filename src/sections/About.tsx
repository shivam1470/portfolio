import SectionTitle from "../ui/SectionTitle";
import CanvasContainer from "../three/components/CanvasContainer";
import SpaceScene from "../three/scenes/SpaceScene";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen text-white flex items-center px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="About Me" />

          <div className="max-w-xl">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Software Engineer with 4+ years of experience building scalable
              web applications using React, TypeScript, and Node.js. I focus on
              performance, clean architecture, and interactive user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I enjoy bridging the gap between engineering and design—combining 
              technical proficiency with a keen eye for aesthetics to create 
              products that are both functional and beautiful.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring the latest in 
              generative art, contributing to open-source projects, or 
              experimenting with 3D web technologies like Three.js.
            </p>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <div className="w-full h-[400px] lg:h-[600px]">
          <CanvasContainer>
            <SpaceScene />
          </CanvasContainer>
        </div>

      </div>
    </section>
  );
}