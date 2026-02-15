import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#121212" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#000000";

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <button
        onClick={toggleTheme}
        style={{
          width: "250px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: theme === "dark" ? "#ffffff" : "#000000",
          color: theme === "dark" ? "#000000" : "#ffffff",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Theme;
