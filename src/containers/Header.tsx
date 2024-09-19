import { useState, useEffect } from "react";
import HeaderNavbar from "./HeaderNavbar";
import HeaderTicker from "./HeaderTicker";

const Header = () => {
  const [theme, setTheme] = useState("#ffffff");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save the theme to localStorage
  const handleThemeChange = (color: string) => {
    setTheme(color);
    localStorage.setItem("theme", color);
  };

  return (
    <header>
      {/* Header Navbar */}
      <HeaderNavbar theme={theme} onThemeChange={handleThemeChange} />

      {/* Header Ticker */}
      <HeaderTicker />
    </header>
  );
};

export default Header;
