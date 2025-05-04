export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:gap-2 md:flex-row items-center justify-center px-6 py-12"
    >
      {/* Hero Section */}
      <section className="md:w-[75%] mt-auto">
        <h1 className="text-5xl md:text-6xl font-black md:text-left mb-4">
          FRONTEND <br />
          <span className="ml-5">+ FULL STACK</span> <br />
          <span className="ml-5 mt-2">DEVELOPER</span>
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Full Name</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6">
          I'm a{" "}
          <strong className="text-teal-700 dark:text-teal-400">
            Frontend & Full Stack Developer
          </strong>{" "}
          with a frontend focus, building scalable and thoughtful web apps with
          real-world impact.
        </p>

        <a
          href="#contact"
          className="inline-block bg-teal-700 dark:bg-teal-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-teal-800 hover:bg-transparent hover:text-teal-800 dark:hover:text-teal-500 border dark:border-teal-500 hover:border-teal-800 dark:hover:bg-transparent transition cursor-pointer"
        >
          Contact Me
        </a>
      </section>
      <div className="flex gap-3 my-4 mt-5 md:w-[25%] md:flex-col md:mt-auto md:ml-auto text-gray-600 dark:text-gray-400">
        <div className="md:flex flex-col items-end">
          <p className="text-center text-3xl text-teal-700 dark:text-teal-500 font-bold p-0 m-0 ">
            2<small>+</small>
          </p>
          <p>Years of Experience</p>
        </div>
        <div className="md:flex flex-col items-end">
          <p className="text-center text-3xl text-teal-700 dark:text-teal-500 font-bold p-0 m-0">
            5<small>+</small>
          </p>
          <p>Completed Projects</p>
        </div>
      </div>
    </section>
  );
}
