
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  client: string;
  link: string;
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A fully-featured online store with inventory management and payment processing.",
      image: "/lovable-uploads/2d51ee4e-6ed5-4089-a3a6-ce4b37dbcffc.png",
      category: "e-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Fashion Retail Co.",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and user-friendly mobile banking application with real-time transactions.",
      image: "/lovable-uploads/e629cedd-f1aa-4b12-a0f5-1edb88101805.png",
      category: "mobile",
      technologies: ["React Native", "Firebase", "TypeScript"],
      client: "Digital Bank Ltd",
      link: "#",
    },
    {
      title: "Corporate Website",
      description: "Modern and responsive website showcasing company services and portfolio.",
      image: "https://placehold.co/600x400",
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      client: "Corporate Solutions Inc",
      link: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tour capabilities.",
      image: "https://placehold.co/600x400",
      category: "web",
      technologies: ["Vue.js", "Laravel", "PostgreSQL"],
      client: "Real Estate Group",
      link: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness tracking application with workout plans and progress monitoring.",
      image: "https://placehold.co/600x400",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Node.js"],
      client: "FitLife Apps",
      link: "#",
    },
    {
      title: "Marketing Analytics Dashboard",
      description: "Real-time marketing analytics dashboard with customizable reports.",
      image: "https://placehold.co/600x400",
      category: "analytics",
      technologies: ["React", "D3.js", "Python", "AWS"],
      client: "Marketing Pro Agency",
      link: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "e-commerce", name: "E-commerce" },
    { id: "analytics", name: "Analytics" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our latest projects and see how we've helped businesses achieve their digital goals
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Client:</span> {project.client}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
