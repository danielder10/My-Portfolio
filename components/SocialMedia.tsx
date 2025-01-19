"use client";

import React from "react";

interface SocialMediaProps {
  size: number;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ size }) => {
  return (
    <div
      className="flex justify-center gap-2 pb-4"
      style={{ pointerEvents: "auto" }}
    >
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835.png" alt="LinkedIn Icon" width={size} height={size} />
      </a>
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Icon" width={size} height={size} />
      </a>
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="YouTube Icon" width={size} height={size} />
      </a>
    </div>
  );
};

export default SocialMedia;
