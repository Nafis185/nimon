import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="theme-toggle"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default ThemeToggle;