import { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

import { Collapse } from "react-collapse";

import TopBar from "./TopBar";
import Button from "./Button";

import { navLinks } from "../data";

const Header = () => {
  const navRef = useRef();
  const [isNavMobile, setIsNavMobile] = useState(false);

  useEffect(() => {
    const handleNavDrop = () => {
      if (document.documentElement.scrollTop > 120) {
        navRef.current.classList.add("fixed", "animate-nav-drop");
      } else {
        navRef.current.classList.remove("fixed", "animate-nav-drop");
      }
    };

    document.addEventListener("scroll", handleNavDrop);

    return () => document.removeEventListener("scroll", handleNavDrop);
  }, []);

  return (
    <header className="relative z-20">
      <TopBar />

      <div ref={navRef} className="w-full bg-white shadow-nav">
        <div className="relative py-5">
          <div className="container flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-secondary">
              BookMyCare
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex gap-x-6">
                {navLinks.map((link, index) => (
                  <li key={`nav-link-${index}`}>
                    <NavLink
                      to={link.url}
                      className={({ isActive }) =>
                        `px-1.5 py-1 text-base relative font-medium before:absolute before:h-2 before:w-2 before:top-[calc(50%-4px)] before:bg-primary before:opacity-0 before:-left-2 before:rounded-pick hover:before:opacity-100 transition-500 before:transition-500 transition-500 before:animate-nav-bounce ${
                          isActive
                            ? "text-primary before:opacity-100 before:animate-none"
                            : "text-secondary hover:text-primary"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button href="/contact" className="!py-3 hidden lg:block">
              Contact Us
            </Button>

            <button
              onClick={() => setIsNavMobile((prevState) => !prevState)}
              className="block p-1 lg:hidden"
            >
              {isNavMobile ? (
                <MdClose className="text-3xl" />
              ) : (
                <MdMenu className="text-3xl" />
              )}
            </button>
          </div>

          <div className="absolute left-0 right-0 w-full top-full lg:hidden">
            <div className="container">
              <Collapse isOpened={isNavMobile}>
                <nav className="bg-white">
                  <ul className="text-sm text-center md:text-15px shadow-nav-mobile">
                    {navLinks.map((link, index) => (
                      <li key={`nav-link-mobile-${index}`}>
                        <NavLink
                          to={link.url}
                          onClick={() => setIsNavMobile(false)}
                          className={({ isActive }) =>
                            `block py-3.5 px-5 border-t border-t-[#DBEEFD] font-medium relative before:absolute before:h-2 before:w-2 before:top-[calc(50%-4px)] before:bg-primary before:opacity-0 before:left-4 md:before:left-8 before:rounded-pick hover:before:opacity-100 transition-500 before:transition-500 transition-500 before:animate-nav-bounce ${
                              isActive
                                ? "text-primary before:opacity-100 before:animate-none"
                                : "text-textPrimary hover:text-primary"
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/contact"
                        onClick={() => setIsNavMobile(false)}
                        className="block py-3.5 px-5 border-t border-t-[#DBEEFD] font-medium bg-primary text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
