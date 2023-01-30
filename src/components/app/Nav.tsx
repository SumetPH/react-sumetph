import { useState } from "react";

const Nav = () => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="w-full p-3">
      <ul className="flex justify-between items-center">
        <div>
          <div
            onClick={toggleTheme}
            className={`w-12 h-6 bg-gray-400 rounded-full flex items-center p-1 duration-500 ${
              theme === "dark" && "bg-green-500"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full duration-500 transform ${
                theme === "dark" && "translate-x-6"
              }`}
            ></div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
