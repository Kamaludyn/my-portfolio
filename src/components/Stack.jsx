import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
} from "react-icons/si";

const techStack = {
  Frontend: [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio className="text-black dark:text-white" />,
    },
  ],
  Tools: [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    {
      name: "GitHub",
      icon: <SiGithub className="text-black dark:text-white" />,
    },
    { name: "Vercel", icon: <SiVercel className="text-cyan-600" /> },
    { name: "Render", icon: <SiRender className="text-blue-400" /> },
  ],
};

const Stack = () => {
  return (
    <section
      id="stack"
      className="w-full mx-auto md:px-4 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-gray-300 dark:border-gray-700 pb-2">
        My Tech Stack
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(techStack).map(([category, tools]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
              {tools.map(({ name, icon }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm"
                >
                  <span className="text-xl">{icon}</span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
