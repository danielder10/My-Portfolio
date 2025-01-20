"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/Project";

const HomePage = () => {
  const projects = [
    {
      name: "Reach Out",
      description: "A Responsive Web App Supporting Justice-Impacted individuals in finding employment",
      image: "/Mockup.png",
      link: "/reachout", 
    },
    {
      name: "PINE",
      description: "Description for Project 2",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
    {
      name: "VT Japan Fest",
      description: "Description for Project 3",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
    {
      name: "Mechanical Object Illustrator",
      description: "Description for Project 4",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
    {
      name: "Soda Can Design Photoshop",
      description: "Description for Project 5",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
    {
        name: "Project 6",
        description: "Description for Project 6",
        image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
        link: "/home", 
    },
    {
        name: "Project 7",
        description: "Description for Project 7",
        image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
        link: "/home", 
    },
  ];

  return (
    <div className="flex-grow flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 mb-6">
            Showcasing my projects and skills.
          </p>
        </section>

        <section
          id="cards-container"
          className="flex flex-wrap justify-center items-center gap-6 w-full max-w-screen-xl"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
