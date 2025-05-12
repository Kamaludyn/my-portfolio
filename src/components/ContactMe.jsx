import { SiLinkedin, SiMailboxdotorg } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="w-full mx-auto md:px-4 py-16">
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

      <div className="w-full space-y-4 text-lg">
        <p className="flex items-start gap-2">
          <span className="flex gap-2 items-center">
            <SiMailboxdotorg className="text-sm md:text-lg" /> Email:
          </span>
          <a
            href="mailto:kamaludeen.abubakar.dev@gmail.com"
            className="break-all text-teal-700 dark:text-teal-400 underline hover:text-teal-900"
          >
            kamaludeen.abubakar.dev@gmail.com
          </a>
        </p>
        <p className="flex items-start gap-2">
          <span className="flex gap-2 items-center">
            <SiLinkedin className="text-sm md:text-lg" /> LinkedIn:{" "}
          </span>
          <a
            href="https://www.linkedin.com/in/kamaludeen-abubakar-8b2b58160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 dark:text-teal-400 underline hover:text-teal-900"
          >
            linkedin.com/in/kamaludeen-abubakar-8b2b58160
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
