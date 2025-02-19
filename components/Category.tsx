"use client";

import React from "react";

interface CategorySelectorProps {
  categories: string[]; 
  onCategoryClick: (category: string) => void; 
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category: string, index: number) => (
        <span
          key={index}
          className="px-6 py-2 bg-coffee text-button font-semibold rounded-full shadow-md text-center hover:bg-button2 transition duration-300 cursor-pointer"
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategorySelector;
