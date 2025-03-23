"use client";

import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

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
    name: "Soda Can Design",
    description: "Find On Behance As Well!",
    image: "/soda.png",
    link: "/soda",
  },
  /*{
    name: "Magazine",
    description: "Find On Behance As Well!",
    image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    link: "/",
  },
  {
    name: "How To Use The Compass Card",
    description: "Find On Behance As Well!",
    image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    link: "/",
  },*/
  {
    name: "Mechanical Object",
    description: "Find On Behance As Well!",
    image: "/camera.png",
    link: "https://www.behance.net/daniel_der",
  },
];

interface SwiperComponentProps {
  selectedCategory: string;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ selectedCategory }) => {
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => {
    if (selectedCategory === "Coded Web Designs") {
      return ["Flick Cafe", "PINE", "Quack Attack", "Reach Out"].includes(project.name);
    }
    if (selectedCategory === "Adobe Design") {
      return ["Soda Can Design", "Magazine", "How To Use The Compass Card", "Mechanical Object"].includes(project.name);
    }
    return false;
  });

  return (
    <section className="w-full max-w-screen-lg py-12">
      <SwiperReact
        modules={[EffectCoverflow, Scrollbar, Mousewheel, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        mousewheel={true}
        parallax={true}
        centeredSlides={true}
        effect="coverflow"
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index} className="bg-button p-4 rounded-lg md:w-[400px] lg:w-[450px] xl:w-[500px]">
            <div className="cardPopout bg-coffee bg-opacity-70 p-5 rounded-md flex flex-col">
              <img src={project.image} alt={project.name} className="w-full rounded mb-4" />
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-white">{project.description}</p>
              <a href={project.link} className="mt-4 flex items-center justify-between bg-button text-white p-2 rounded transition hover:bg-button2">
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </SwiperReact>
    </section>
  );
};

export default SwiperComponent;
