import avatar from "../assets/images/portfolio-avatar.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:gap-2 md:flex-row items-center justify-center pt-20 md:pt-16 md:mt-0 md:mb-10"
    >
      {/* Hero Section */}
      <section className="flex flex-col self-end md:w-[58%] h-full mb-4 md:mb-4">
        <h1 className="text-gray-900 dark:text-gray-100 text-4xl md:text-5xl lg:text-6xl font-black md:text-left md:mb-14">
          FRONTEND <br />
          <span className="ml-5">+ FULL STACK</span> <br />
          <span className="ml-5 mt-2">DEVELOPER</span>
        </h1>
        <h2 className="text-gray-900 dark:text-gray-100 text-3xl sm:text-4xl lg:text:5xl font-bold">
          Kamaludeen Abubakar.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-14">
          A{" "}
          <strong className="text-teal-700 dark:text-teal-400">
            Frontend & Full Stack Developer
          </strong>{" "}
          with a frontend focus, building scalable and thoughtful web apps with
          real-world impact.
        </p>

        <a
          href="mailto:kamaluddeen305@gmail.com"
          className="w-fit mx-auto md:ml-0 inline-block bg-teal-700 dark:bg-teal-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-teal-800 hover:bg-transparent hover:text-teal-800 dark:hover:text-teal-500 border dark:border-teal-500 hover:border-teal-800 dark:hover:bg-transparent transition cursor-pointer"
        >
          Contact Me
        </a>
      </section>
      <div className="md:w-[40%] md:h-full flex flex-col md:flex-col-reverse justify-center items-center md:items-start">
        <div className="flex gap-3 md:gap-4 my-4 md:my-2 mt-auto md:ml-6 text-gray-600 dark:text-gray-400">
          <div className="md:flex flex-col items-end md:items-start">
            <p className="text-center text-3xl text-teal-700 dark:text-teal-500 font-bold p-0 m-0 ">
              2<small>+</small>
            </p>
            <p>Years of Experience</p>
          </div>
          <div className="md:flex flex-col items-end md:items-start">
            <p className="text-center text-3xl text-teal-700 dark:text-teal-500 font-bold p-0 m-0">
              5<small>+</small>
            </p>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl md:w-full md:px-6 md:py-2 px-4 py-12">
          <img
            src={avatar}
            alt="portfolio-avatar"
            className="mx-auto w-full rounded-lg shadow-lg"
            decoding="async"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
