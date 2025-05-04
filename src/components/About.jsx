const About = () => {
  return (
    <section
      id="about"
      className="w-full mx-auto px-4 py-16 text-3xl font-light text-gray-600 dark:text-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
        This is Me
      </h2>
      <p className="leading-10 mb-6">
        I have a strong focus on building
        <strong> scalable, real-world web applications</strong> that deliver
        real value. I specialize in <strong>React</strong>,{" "}
        <strong>Tailwind CSS</strong>, and modern frontend tools to create
        clean, responsive, and accessible user interfaces. On the backend, I'm
        comfortable working with
        <strong> Node.js</strong>, <strong>Express</strong>, and{" "}
        <strong>MongoDB</strong> to power robust, API-driven applications.
      </p>

      <p className="leading-10 mb-6">
        What sets me apart is my commitment to solving real problems, not just
        writing code. I enjoy diving deep into user needs, collaborating across
        teams, and continuously learning to improve both my craft and the
        products I contribute to. I believe that the best solutions come from a
        blend of technical expertise and a genuine understanding of user
        experience.
      </p>
      <p className="text-lg leading-10 font-semibold text-teal-700 dark:text-teal-300">
        I'm currently open to both <u>full-time opportunities</u> and{" "}
        <u>freelance projects</u>. Whether you're building a frontend product or
        a full stack application, I'm excited to contribute with both{" "}
        <strong>technical precision</strong> and{" "}
        <strong>real-world practicality</strong>.
      </p>
    </section>
  );
};

export default About;
