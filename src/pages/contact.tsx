import React from "react";
import { useTheme } from "../lib/theme/themeProvider";

const Contact: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`bg-background text-text min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-4xl font-bold">Contact Page</h1>
      <p>This is the contact page. The current theme is {theme}.</p>
      <button
        onClick={toggleTheme}
        className="p-2 mt-4 bg-primary text-red-500 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Contact;
