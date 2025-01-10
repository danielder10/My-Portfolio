"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-md mx-auto">
          Discover my projects, skills, and work. Click the button below to get started on your journey!
        </p>
        <button
          className="px-8 py-4 md:px-10 md:py-5 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          onClick={handleClick}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
