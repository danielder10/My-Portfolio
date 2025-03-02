"use client";

import React, { useState } from "react";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Check if the project should open in a new tab
  const isExternalLink = name === "Mechanical Object";

  return (
    <div 
      className="relative w-64 sm:w-1/3 lg:w-1/4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isExternalLink ? (
        // External link that opens in a new tab
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex flex-col bg-coffee rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200">
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <button
              onClick={(e) => e.stopPropagation()}
              className="bg-button text-white py-2 px-6 rounded-md hover:bg-button2 transition"
            >
              Learn More
            </button>
          </div>
        </a>
      ) : (
        // Internal link that works with Next.js routing
        <Link href={link} className="block">
          <div className="flex flex-col bg-coffee rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200">
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <button
              onClick={(e) => e.stopPropagation()}
              className="bg-button text-white py-2 px-6 rounded-md hover:bg-button2 transition"
            >
              Learn More
            </button>
          </div>
        </Link>
      )}

      {/* Hover Preview */}
      <div 
        className={`absolute left-full top-1/2 transform -translate-y-1/2 translate-x-4 z-50 w-80 opacity-0 scale-95 transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 scale-100 translate-x-6" : ""
        } pointer-events-none`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-lg shadow-lg border border-gray-200"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
