import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Redux Toolkit", "TypeScript", "JavaScript", "HTML", "ANTD", "Material UI", "Formik", "Axios"]
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express.js", "NestJS", "Microservices", "PostgreSQL", "MongoDB", "Sequelize", "TypeORM", "REST", "JWT"]
  },
  {
    title: "DevOps & Tools",
    skills: ["AWS", "AWS Amplify", "Docker", "Git", "GitHub", "GitHub Actions", "Google Maps API"]
  },
  {
    title: "Testing & CS",
    skills: ["Jest", "Cucumber", "E2E", "Data Structures"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive overview of the technical tools and technologies I use to build modern, high-performance applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="text-indigo-400 font-bold text-xl uppercase tracking-widest border-l-4 border-indigo-600 pl-4"
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, index) => (
                  <Card key={skill} delay={(catIndex * 0.1) + (index * 0.05)} className="p-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
