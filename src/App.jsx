import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-white px-10 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <ContactMe />
    </main>
  );
}

export default App;
