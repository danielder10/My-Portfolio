"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CategorySelector from "@/components/Category";

const LandingPage: React.FC = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Adobe Design",
    "Coded Web Designs",
    "Personal Projects",
  ];

  const categoryDescriptions: { [key: string]: string[] } = {
    All: [
      "Illustrator",
      "Photoshop",
      "After Effects",
      "InDesign",
      "VS Code",
      "GitHub",
    ],
    "Adobe Design": ["Illustrator", "Photoshop", "After Effects", "InDesign"],
    "Coded Web Designs": ["VS Code", "GitHub"],
    "Personal Projects": [
      "Adobe Designs",
      "Coded Designs",
      "Various creative works",
    ],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleEnterClick = () => {
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header />
    <div className="">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between h-screen px-6 bg-gray-100 dark:bg-gray-900 flex-grow mt-10">
        <div className="flex flex-col items-center w-full lg:w-1/2 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
            Explore my work, skills, and creative projects. Start your journey below!
          </p>
          <Button
            text="Enter"
            onClick={handleEnterClick}
            type="primary"
            className="mb-6 w-auto"
          />
          <br />
          {/* Category Selector */}
          <CategorySelector
            categories={categories}
            onCategoryClick={handleCategoryClick}
          />
          <br></br>
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Selected Category: {selectedCategory}
            </h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
              {categoryDescriptions[selectedCategory].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/3 lg:w-1/2 flex justify-center mt-5">
          <img
            src="/Logo.png"
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
