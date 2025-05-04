import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
