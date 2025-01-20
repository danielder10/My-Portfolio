"use client";

import React from "react";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image, link }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(link);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200 w-64 sm:w-1/3 lg:w-1/4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button
        onClick={handleNavigation}
        className="bg-button text-white py-2 px-6 rounded-md hover:bg-button2 transition"
      >
        Learn More
      </button>
    </div>
  );
};

export default ProjectCard;
