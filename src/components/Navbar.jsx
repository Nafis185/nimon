import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Experiences",
      href: "#experiences",
    },
    {
      label: "Our Work",
      href: "#showcase",
    },
    {
      label: "Packages",
      href: "#packages",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar-wrapper ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <nav className="navbar container-premium">

        {/* BRAND */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <span className="navbar-brand-mark">
            W
          </span>

          <span className="navbar-brand-text">
            Wedding
            <span>Studio</span>
          </span>
        </a>


        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-link"
            >
              {item.label}
            </a>
          ))}

        </div>


        {/* DESKTOP ACTIONS */}
        <div className="navbar-actions">

          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
          />

          <a
            href="#showcase"
            className="navbar-demo-button"
          >
            <span>View Demo</span>

            <ArrowUpRight
              size={15}
            />
          </a>

        </div>


        {/* MOBILE ACTIONS */}
        <div className="navbar-mobile-actions">

          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
          />

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </nav>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        <div className="mobile-menu-inner container-premium">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-menu-link"
              onClick={closeMenu}
            >
              <span>
                {item.label}
              </span>

              <ArrowUpRight
                size={16}
              />
            </a>
          ))}


          <a
            href="#showcase"
            className="mobile-demo-button"
            onClick={closeMenu}
          >
            View Demo

            <ArrowUpRight
              size={16}
            />
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;