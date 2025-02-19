"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/Project";

const HomePage = () => {
  const projects = [
    {
      name: "Flick Cafe",
      description: "A 1920s art deco cafe blending coffee, cinema, and classic movie vibes.",
      image: "/Mockup4.png",
      link: "/flickcafe", 
    },
    {
      name: "PINE",
      description: "A Responsive Web App Simplifying Meals With Recipes And Dining Options.",
      image: "/Mockup2.png",
      link: "/pine", 
    },
    {
      name: "Quack Attack",
      description: "A metroidvania platformer where a heroic duck battles Chef Louis to save the farm.",
      image: "/Mockup3.png",
      link: "/quackattack", 
    },
    {
      name: "Reach Out",
      description: "A Responsive Web App Supporting Justice-Impacted individuals in finding employment",
      image: "/Mockup.png",
      link: "/reachout", 
    },
    {
      name: "VT Japan Fest",
      description: " Currently WIP {An Interactive Travel Guide For People Wanting To Explore Japan} ",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
    {
      name: "Mechanical Object",
      description: "Find On Behance As Well!",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
    {
      name: "Soda Can Design",
      description: "Find On Behance As Well!",
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      link: "/home", 
    },
  ];

  return (
    <div className="flex-grow flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 mb-10">
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
