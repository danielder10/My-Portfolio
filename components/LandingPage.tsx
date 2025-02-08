"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CategorySelector from "@/components/Category";
import Typing from "@/components/Typing";

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
      "Tailwind CSS", 
      "Typescript", 
      "JavaScript", 
      "HTML", 
      "HTML5", 
      "CSS",
    ],
    "Adobe Design": ["Illustrator", "Photoshop", "After Effects", "InDesign"],
    "Coded Web Designs": ["VS Code", "GitHub", "Tailwind CSS", "Typescript", "JavaScript", "HTML", "HTML5", "CSS"],
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
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6">
        <section className="w-full max-w-screen-lg py-12">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
            <div className="flex flex-col w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
                Welcome to My Portfolio
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center lg:text-left">
                Explore my work, specializing in <Typing />
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  text="View My Works!"
                  onClick={handleEnterClick}
                  type="primary"
                  className="w-auto"
                />
              </div>
              <CategorySelector
                categories={categories}
                onCategoryClick={handleCategoryClick}
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-md">
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
