import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

const blogs = [
  {
    title: "Automating End-to-End Test Scaffolding in NestJS with nest-e2e-gen",
    excerpt: "Learn how to significantly reduce setup time and ensure testing best practices by automating E2E test generation in NestJS applications.",
    date: "Sep 19, 2025",
    link: "https://medium.com/@shivammishr16/automating-end-to-end-test-scaffolding-in-nestjs-with-nest-e2e-gen-09887888999c",
    category: "Testing",
  },
  {
    title: "Build a Scalable HRMS API with NestJS, Sequelize, Swagger, MySQL & Docker",
    excerpt: "A comprehensive guide to building a professional Human Resource Management System API using a modern tech stack and industry best practices.",
    date: "Jun 14, 2025",
    link: "https://blog.stackademic.com/build-a-scalable-hrms-api-with-nestjs-sequelize-swagger-mysql-docker-620baafe0f47",
    category: "Backend",
  },
  {
    title: "A Roadmap to Becoming a React Developer in 2024: A Comprehensive Guide 🚀",
    excerpt: "Everything you need to know to master React in 2024, from fundamental concepts to advanced patterns and ecosystem tools.",
    date: "Nov 14, 2023",
    link: "https://medium.com/@shivammishr16/a-roadmap-to-becoming-a-react-developer-in-2024-a-comprehensive-guide-760966767643",
    category: "Frontend",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Latest Articles"
          subtitle="I regularly write about software engineering, architecture, and modern web technologies on Medium."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogs.map((blog, index) => (
            <Card key={blog.title} delay={index * 0.1} className="flex flex-col h-full group">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-900/20 px-3 py-1 rounded-full border border-indigo-500/20">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {blog.excerpt}
                </p>
                
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors"
                >
                  Read on Medium <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://shivammishr16.medium.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              View All Articles
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
