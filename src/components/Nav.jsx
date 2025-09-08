import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["About", "Work", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex h-16 sm:h-20 lg:h-24 items-center relative z-50 px-4 sm:px-6 lg:px-8">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <p className="font-cursive text-4xl  md:color-mint lg:text-4xl color-mint xl:text-5xl color-mint font-semibold tracking-wide logo">
          Sofi
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-8 xl:space-x-12">
          {links.map((link, index) => (
            <li key={index}>
              {link === 'Contact' ? (
                <Link
                  onClick={() => { scroll.scrollToBottom() }}
                  to={link}
                  smooth={true}
                  duration={500}
                  className="nav-link relative px-2 py-1 font-semibold text-lg transition-all duration-300 hover:text-white cursor-pointer capitalize tracking-wide"
                  data-text={link}
                >
                  {link}
                </Link>
              ) : (
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  className="nav-link relative px-2 py-1 font-semibold text-lg transition-all duration-300 hover:text-white cursor-pointer capitalize tracking-wide"
                  data-text={link}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex-1 flex justify-end">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:bg-opacity-10"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 sm:top-20 text-white left-0 w-full bg-mint bg-opacity-95 backdrop-blur-sm">
          <ul className="flex flex-col py-6 px-4 space-y-4">
            {links.map((link, index) => (
              <li key={index} className='text-center color-liliac'>
                {link === 'Contact' ? (
                  <Link
                    onClick={() => { 
                      scroll.scrollToBottom();
                      closeMenu();
                    }}
                    to={link}
                    smooth={true}
                    duration={500}
                    className="nav-link relative block px-4 py-3 font-semibold text-lg transition-all duration-300 hover:text-white cursor-pointer capitalize tracking-wide text-center border-opacity-30"
                    data-text={link}
                  >
                    {link}
                  </Link>
                ) : (
                  <Link
                    onClick={closeMenu}
                    to={link}
                    smooth={true}
                    duration={500}
                    className="nav-link relative block px-4 py-3 font-semibold text-lg transition-all duration-300 hover:text-white cursor-pointer capitalize tracking-wide text-center border-opacity-30"
                    data-text={link}
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-mint bg-opacity-50 -z-10"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Nav;