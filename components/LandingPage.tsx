'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CategorySelector from "@/components/Category";
import Typing from "@/components/Typing";
import SwiperComponent from "@/components/Swiper";

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
    <div 
    className="flex flex-col min-h-screen bg-cover bg-center transition-colors duration-500 opacity-85"
    style={{ backgroundImage: "url('/landing.gif')" }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6">
      <section className="w-full max-w-screen-lg py-12">
        <div className="bg-[#F5E6DA] bg-opacity-90 border border-[#C4A484] shadow-xl rounded-2xl p-8">
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
              <div className="p-6 bg-gradient-to-b from-[#E8D7C0] to-[#C4A484] border border-[#8B5E3C] shadow-lg rounded-xl">
                <h2 className="text-2xl font-serif font-bold text-[#4D2D1A]">
                  Selected Category: {selectedCategory}
                </h2>
                <ul className="mt-4 space-y-2">
                  {categoryDescriptions[selectedCategory].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-[#3A2C1A]">
                      <span className="inline-block w-2.5 h-2.5 bg-[#8B5E3C] rounded-full opacity-70"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Swiper Component */}
      <SwiperComponent selectedCategory={selectedCategory} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
