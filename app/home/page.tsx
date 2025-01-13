"use client";

import Header from "../../components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/Project";

const HomePage = () => {
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
    {
      name: "Project 4",
      description: "Description for Project 4",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      name: "Project 5",
      description: "Description for Project 5",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      name: "Project 6",
      description: "Description for Project 6",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      name: "Project 7",
      description: "Description for Project 7",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
    {
      name: "Project 8",
      description: "Description for Project 8",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4">
        {/* Title Section */}
        <section className="text-center py-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-600 mb-6">Showcasing my projects and skills.</p>
        </section>

        {/* Grid Container */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
            <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                image={project.image}
            />
            ))}
        </section>
        </main>
      <Footer />
    </div>
  );
};

export default HomePage;
