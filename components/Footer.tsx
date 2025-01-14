"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 w-full">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
