"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  className?: string;
  disableTypeStyles?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "primary",
  className = "",
  disableTypeStyles = false,
}) => {
  const baseStyles =
    "px-6 py-2 font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const typeStyles = !disableTypeStyles
    ? type === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-white hover:dark:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-500 w-1/2"
      : "bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-white hover:dark:bg-gray-600 focus:ring-gray-400 dark:focus:ring-gray-500 w-1/2"
    : "";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${typeStyles} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
