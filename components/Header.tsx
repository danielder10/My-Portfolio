"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav
          className={`${
            menuOpen || !isMobile ? 'block' : 'hidden'
          } absolute top-0 left-0 w-full bg-gray-800 lg:flex lg:static lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row">
            <li className="p-4">
              <a
                onClick={() => router.push('/home')}
                className="text-xl cursor-pointer"
              >
                Home
              </a>
            </li>
            <li className="p-4">
              <a
                onClick={() => router.push('/about')}
                className="text-xl cursor-pointer"
              >
                About
              </a>
            </li>
            <li className="p-4 relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-xl cursor-pointer flex items-center"
              >
                Subjects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute left-0 lg:left-auto lg:right-0 mt-2 lg:mt-0 lg:w-48 bg-gray-700 text-white shadow-lg rounded-lg">
                  <li
                    className="p-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/#subject-a');
                    }}
                  >
                    Digital Designs (Adobe suite)
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/#subject-b');
                    }}
                  >
                    Coded Digital Designs + Projects
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setDropdownOpen(false);
                      router.push('/#subject-c');
                    }}
                  >
                    Other Projects
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
