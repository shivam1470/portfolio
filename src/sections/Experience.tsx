import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Deel",
    role: "Software Engineer",
    duration: "08/2023 - Present",
    location: "Remote (San Francisco HQ)",
    description: "Developed job portal and applicant lifecycle features. Owned several NestJS-based microservices related to employment, expenses, and payroll sync. Managed schema evolution with Sequelize and PostgreSQL/MySQL. Achieved 100% e2e test coverage using Jest and Supertest.",
    skills: ["React", "TypeScript", "NestJS", "PostgreSQL", "Sequelize", "Jest", "GitHub Actions"],
  },
  {
    company: "Wakencode Technologies Pvt. Ltd",
    role: "Frontend Engineer",
    duration: "08/2021 - 08/2023",
    location: "Gurugram, India",
    description: "Delivered responsive UIs using React, Material UI, and Ant Design. Managed global state with Redux Toolkit and handled API integrations with Axios. Documented components using Storybook and integrated backend services with AWS Amplify.",
    skills: ["React", "Redux Toolkit", "Material UI", "Ant Design", "Axios", "Storybook", "AWS Amplify"],
  },
  {
    company: "Blinsoft Technologies",
    role: "Frontend Web Developer (Intern)",
    duration: "07/2020 - 10/2020",
    location: "Noida, India",
    description: "Built responsive web applications using HTML, CSS, and JavaScript. Collaborated with the design team to implement pixel-perfect user interfaces.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Work Experience"
          subtitle="A summary of my professional journey and the impact I've made at global tech companies."
        />

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-black z-10" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                }`}>
                  <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-6 rounded-2xl hover:border-indigo-500/30 transition-colors">
                    <div className="flex flex-col mb-1">
                      <span className="text-indigo-400 font-mono text-xs font-semibold uppercase tracking-tighter">
                        {exp.duration}
                      </span>
                      <span className="text-gray-500 text-[10px] uppercase font-bold">
                        {exp.location}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                    <h4 className="text-indigo-500 font-semibold mb-4">{exp.company}</h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] bg-indigo-900/20 text-indigo-300 px-2 py-1 rounded-md border border-indigo-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
