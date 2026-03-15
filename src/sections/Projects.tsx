import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const projects = [
  {
    title: "Dairy Farm Management",
    description: "A comprehensive dairy farm management system featuring real-time tracking of milk production, cattle health, and inventory. Built with a robust backend and an intuitive frontend dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    link: "https://dairy-farm-web.vercel.app",
    github: "https://github.com/shivam1470/dairy-farm",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Space Science Explorer",
    description: "An interactive educational platform exploring the cosmos. Features stunning visualizations and detailed information about celestial bodies, leveraging modern web technologies for an immersive experience.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "https://space-science.vercel.app",
    github: "https://github.com/shivam1470/space-science",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "nest-e2e-gen (NPM Package)",
    description: "A developer tool that automates the generation of end-to-end (E2E) test boilerplates for NestJS applications, significantly reducing setup time and ensuring testing best practices.",
    tech: ["Node.js", "TypeScript", "CLI", "NPM"],
    link: "https://www.npmjs.com/package/nest-e2e-gen",
    github: "https://github.com/shivam1470/nest-e2e-gen",
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my personal projects and open-source contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} delay={index * 0.1} className="flex flex-col p-0 overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] bg-gray-800 text-indigo-300 px-2 py-1 rounded-md border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                  >
                    Live Demo <span className="ml-1">→</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
