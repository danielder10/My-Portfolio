"use client";

import React from "react";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 items-center text-center hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition shadow-md">
        Learn More
      </button>
    </div>
  );
};

export default ProjectCard;
