"use client";

import Header from "../../components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      name: "Project 1",
      description: "Description for Project 1",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      name: "Project 2",
      description: "Description for Project 2",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      name: "Project 3",
      description: "Description for Project 3",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(projects.length / 3) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(projects.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800">
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="mb-6">Showcasing my projects and skills.</p>
        </section>

        <section className="relative w-full max-w-5xl">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${(projects.length / 3) * 100}%`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 flex flex-col items-center p-4"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-3/4 h-auto rounded-lg mb-4 shadow-lg"
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-sm text-center mb-4">
                    {project.description}
                  </p>
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4 -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              &#9664;
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              &#9654;
            </button>
          </div>
        </section>

        <section className="flex justify-center gap-2 mt-4">
          {Array(Math.ceil(projects.length / 3))
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 ${
                  currentIndex === index ? "bg-black" : "bg-gray-400"
                } rounded-full cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
