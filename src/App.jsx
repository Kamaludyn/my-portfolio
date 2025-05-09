import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import GoogleAnalytics from "./components/GoogleAnalytics";

function App() {
  return (
    <>
      <GoogleAnalytics trackingId="G-69H7BVG3HY" />
      <main className="flex flex-col mx-auto w-[95%] md:w-[80%] text-gray-800 dark:text-gray-200 transition-colors mt-20">
        <Nav />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
