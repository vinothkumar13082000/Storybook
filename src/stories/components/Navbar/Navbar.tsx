import React, { useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../theme/ThemeProvider";

export interface NavbarOption {
  name: string;
  route: string;
  icon?: React.ReactNode;
}

export interface NavbarProps {
  /** Navigation options */
  options?: NavbarOption[];
  /** Logo image URL */
  image?: string;
  /** Header title */
  headerTitle?: string;
  /** Show mobile menu */
  showMobileMenu?: boolean;
  /** Custom className */
  className?: string;
}

const defaultOptions: NavbarOption[] = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

const Navbar: React.FC<NavbarProps> = ({
  options = defaultOptions,
  image = "https://cdn.pixabay.com/photo/2022/09/04/19/19/trolley-7432508_960_720.png",
  headerTitle = "My Website",
  showMobileMenu = true,
  className = "",
}) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`ui-navbar ${className}`}>
      <div className="ui-navbar__container">
        <div className="ui-navbar__brand">
          {image && (
            <img src={image} alt="logo" className="ui-navbar__logo" />
          )}
          <span className="ui-navbar__title">{headerTitle}</span>
        </div>

        <div className={`ui-navbar__menu ${mobileMenuOpen ? 'ui-navbar__menu--open' : ''}`}>
          {options.map((option, index) => (
            <button
              key={index}
              className="ui-navbar__item"
              onClick={() => handleNavClick(option.route)}
            >
              {option.icon && <span className="ui-navbar__item-icon">{option.icon}</span>}
              <span>{option.name}</span>
            </button>
          ))}
        </div>

        <div className="ui-navbar__actions">
          <button
            className="ui-navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mode === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          {showMobileMenu && (
            <button
              className="ui-navbar__mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
