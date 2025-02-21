"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="p-4 bg-coffee text-white mb-10">
      <div className="flex justify-between items-center">
        <a
          onClick={() => router.push('/')}
          className="text-xl cursor-pointer"
        >
          <div className="text-2xl font-bold">
            <img src="/Logo.png" className="w-40 h-auto" alt="Logo" />
          </div>
        </a>
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
          } absolute top-0 left-0 w-full bg-coffee lg:flex lg:static lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row">
            <li className="p-4">
              <a
                onClick={() => router.push('/home')}
                className="text-xl cursor-pointer"
              >
                My Works
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
            <li className="p-4">
              <a
                href="https://www.behance.net/daniel_der"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl cursor-pointer"
              >
                Behance
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
