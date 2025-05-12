const projects = [
  {
    title: "CareerConnect Frontend",
    description:
      "This is a cloud-based networking platform that connects students, mentors, and employers to facilitate career growth, mentorship, and job opportunities.",
    tech: ["React", "Tailwind CSS", "Socket.IO"],
    github: "https://github.com/Kamaludyn/career_connect_frontend",
    link: "https://career-connect-frontend-three.vercel.app/",
    role: "Frontend Developer",
    stackLevel: "Full Stack",
  },
  {
    title: "CareerConnect Backend",
    description:
      "The CareerConnect Backend is a Node.js and Express server that powers the CareerConnect platform, a professional networking and mentorship system. It provides APIs for user authentication, messaging, job postings, mentorship connections, notifications, and more",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/Kamaludyn/career_connect_backend",
    link: "https://career-connect-frontend-three.vercel.app/",
    role: "Backend Developer",
    stackLevel: "Full Stack",
  },
  //   {
  //     title: "POS App",
  //     description:
  //       "A smart point-of-sale system that tracks business capital, profit, and transactions. Built for small businesses to manage sales efficiently with a clean UI.",
  //     tech: ["React", "Node.js", "Express", "MongoDB"],
  //     github: "https://pos-app",
  //     link: "https://pos-app",
  //     role: "Full Stack Developer",
  //     stackLevel: "Full Stack",
  //   },
  {
    title: "IP Detective",
    description:
      "A geolocation tracker app using the IP Geolocation and Leaflet API to fetch and visualize user location data.",
    tech: ["React", "Tailwins CSS", "Leaflet", "Geolocation API"],
    github: "https://github.com/Kamaludyn/IP-Detective",
    link: "https://ip-detective.vercel.app/",
    role: "Frontend Developer",
    stackLevel: "Frontend",
  },
  {
    title: "Country Explorer",
    description:
      "A country search and visualization tool that fetches data from the REST Countries API and displays them with filtering, themes, and detailed views.",
    tech: ["React", "Tailwind CSS", "REST API"],
    github: "https://github.com/Kamaludyn/Country-Explorer",
    link: "https://country-explorer-eta.vercel.app/",
    role: "Frontend Developer",
    stackLevel: "Frontend",
  },
  {
    title: "MERN E-commerce Frontend",
    description:
      "A modern e-commerce frontend built with React and Tailwind CSS, designed to work seamlessly with a custom Node.js and MongoDB backend. Developed features like product listing, dynamic filtering, cart management, authentication, and route protection.",
    tech: ["React", "Tailwind CSS", "Context API", "JWT Auth"],
    github: "https://github.com/Kamaludyn/mern_ecommerce_frontend",
    link: "https://mernmart-eight.vercel.app/",
    role: "Frontend Developer",
    stackLevel: "Full Stack",
  },
  {
    title: "SA Agro Farm",
    description:
      "A single-page business website built for a local agricultural company. Showcasing the brand and it's operations in a clean, responsive layout.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Kamaludyn/Sa-agro-farm",
    link: "https://sa-agro-farm-5acq.vercel.app/",
    role: "Frontend Developer",
    stackLevel: "Frontend",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full mx-auto md:px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-gray-300 dark:border-gray-700 pb-2">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 md:p-6 border border-gray-200 dark:border-gray-700 transition hover:shadow-lg hover:scale-[1.009] ease-in-out"
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

            <div className="mt-auto ">
              <ul className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4 mt-auto">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-700 dark:text-teal-300 font-semibold hover:underline mt-auto"
                >
                  View Project →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-700 dark:text-teal-300 font-semibold hover:underline mt-auto"
                >
                  View Github Repo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
