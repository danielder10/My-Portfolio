import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-coffee text-white p-2 rounded-md focus:outline-none"
      >
        ☰
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md">
          <li className="p-2 border-b"><Link href="/">Home</Link></li>
          <li className="p-2 border-b"><Link href="/about">About</Link></li>
          <li className="p-2 border-b">Subject A</li>
          <li className="p-2 border-b">Subject B</li>
          <li className="p-2">Subject C</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
