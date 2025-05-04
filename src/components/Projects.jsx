const projects = [
  {
    title: "CareerConnect",
    description:
      "A full-featured mentorship and job platform connecting students, mentors, and employers. Built with the MERN stack, featuring real-time messaging, role-based dashboards, and job/resource posting.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    link: "https://careerconnect",
    role: "Full Stack Developer",
    stackLevel: "Full Stack",
  },
  {
    title: "POS App",
    description:
      "A smart point-of-sale system that tracks business capital, profit, and transactions. Built for small businesses to manage sales efficiently with a clean UI.",
    tech: ["React", "Express", "MongoDB"],
    link: "https://pos-app",
    role: "Full Stack Developer",
    stackLevel: "Full Stack",
  },
  {
    title: "IP Detective",
    description:
      "A geolocation tracker app using the IP Geolocation and Leaflet API to fetch and visualize user location data.",
    tech: ["React", "Leaflet", "Geolocation API"],
    link: "https://ip-detective",
    role: "Frontend Developer",
    stackLevel: "Frontend",
  },
  {
    title: "Country Explorer",
    description:
      "A country search and visualization tool that fetches data from the REST Countries API and displays them with filtering, themes, and detailed views.",
    tech: ["React", "Tailwind CSS", "REST API"],
    link: "https://country-explorer",
    role: "Frontend Developer",
    stackLevel: "Frontend",
  },
  {
    title: "MERN E-commerce Frontend",
    description:
      "A modern e-commerce frontend built with React and Tailwind CSS, designed to work seamlessly with a custom Node.js and MongoDB backend. Developed features like product listing, dynamic filtering, cart management, authentication, and route protection.",
    tech: ["React", "Tailwind CSS", "Context API", "JWT Auth"],
    link: "https://mern-ecommerce-frontend",
    role: "Frontend Developer",
    stackLevel: "Full Stack",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-gray-300 dark:border-gray-700 pb-2">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition hover:shadow-lg hover:scale-[1.009] ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">
              {project.title}
            </h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Role:</span> {project.role}
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Stack:</span> {project.stackLevel}
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.tech.map((tech, index) => (
                <li
                  key={index}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-self-start text-sm text-teal-700 dark:text-teal-300 font-semibold hover:underline mt-auto"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
