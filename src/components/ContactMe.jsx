import { SiLinkedin, SiMailboxdotorg } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl text-center mx-auto px-4 py-16 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-gray-300 dark:border-gray-700 pb-2">
        Contact Me
      </h2>

      <p className="text-lg mb-6 leading-relaxed">
        Whether you've got a question, want to collaborate, or just want to say
        hi, my inbox is always open. I'm currently open to both{" "}
        <span className="text-teal-600 dark:text-teal-400 font-semibold">
          full-time roles
        </span>{" "}
        and{" "}
        <span className="text-teal-600 dark:text-teal-400 font-semibold">
          freelance projects
        </span>
        .
      </p>

      <div className="space-y-4 text-lg">
        <p className="flex justify-center items-center gap-2">
          <SiMailboxdotorg /> Email:{" "}
          <a
            href="mailto:kamaluddeen305@gmail.com"
            className="text-teal-700 dark:text-teal-400 underline hover:text-teal-900"
          >
            kamaluddeen305@gmail.com
          </a>
        </p>
        <p className="flex justify-center items-center gap-2">
          <SiLinkedin /> LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/kamaludyn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 dark:text-teal-400 underline hover:text-teal-900"
          >
            linkedin.com/in/Kamaludyn
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
