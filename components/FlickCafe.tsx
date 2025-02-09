"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import designOne from "../public/cafe-color.png";
import designTwo from "../public/cafe-logo.png";
import designThree from "../public/cafe-logo-sketch.png";
import designFour from "../public/mood1.png";
import designFive from "../public/mood2.png";
import designSix from "../public/cafe-buttons.png";
import logo from "../public/cafe-logo2.png"; 
import screenOne from "../public/cafe-home.png";
import screenTwo from "../public/cafe-menu.png";
import screenThree from "../public/cafe-checkout.png";
import screenFour from "../public/cafe-order-status.png";
import screenFive from "../public/cafe-contact.png";
import screenSix from "../public/cafe-screening.png";

const FlickCafe = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  const [designCurrentIndex, setDesignCurrentIndex] = useState(0);

  const handleDesignNext = () => {
    setDesignCurrentIndex(
      (prevIndex) => (prevIndex + 1) % designCarouselImages.length
    );
  };

  const handleDesignPrev = () => {
    setDesignCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + designCarouselImages.length) %
        designCarouselImages.length
    );
  };

  const designCarouselImages = [
    {
      src: designOne,
      alt: "success story 1",
      id: 1,
      issue: "Welcoming Hero Section:",
      type: "Color Palette",
      sum:
        "A professional and collaborative setting with diverse individuals working together, accompanied by a prominent 'Get Started Now!' button.",
    },
    {
      src: designTwo,
      alt: "success story 2",
      id: 2,
      issue: "Clean Layout",
      type: "Our Logo",
      sum:
        "Sections with clear headings like 'Progress Tracking' and 'Resource Database' for easy navigation.",
    },
    {
      src: designThree,
      alt: "success story 3",
      id: 3,
      issue: "Consistent Color Scheme",
      type: "Logo Sketches",
      sum:
        "Highlighting a soothing green and grey palette, applied cohesively across buttons, backgrounds, and headings.",
    },
    {
      src: designFour,
      alt: "success story 4",
      id: 4,
      issue: "Impact Highlights",
      type: "Mood Board",
      sum:
        "A visually appealing infographic / dashboard displaying '2000+ job seekers placed' and '500+ nonprofit organizations engaged.'",
    },
    {
      src: designFive,
      alt: "success story 5",
      id: 5,
      issue: "Interactive Features",
      type: "Mood Board",
      sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
    {
      src: designSix,
      alt: "success story 5",
      id: 6,
      issue: "Interactive Features",
      type: "Buttons",
      sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
  ];

  const screenImages = [
    {
      src: screenOne,
      alt: "success story 1",
      id: 1,
      type: "Home Screen",
    },
    {
      src: screenTwo,
      alt: "success story 1",
      id: 2,
      type: "Menu Screen",
    },
    {
      src: screenThree,
      alt: "success story 1",
      id: 3,
      type: "Checkout Screen",
    },
    {
      src: screenFour,
      alt: "success story 1",
      id: 4,
      type: "Order Success Screen",
    },
    {
      src: screenFive,
      alt: "success story 1",
      id: 5,
      type: "Contact Screen",
    },
    {
      src: screenSix,
      alt: "success story 1",
      id: 6,
      type: "Movie Section Screen",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-white px-4">
        <div className="text-center"/>
          {/* Centered and Resized Image */}
          <img
            src="/Mockup4.png"
            alt="Flick Cafe Mockup"
            className="mx-auto w-3/4 md:w-2/3 lg:w-1/2 h-auto mb-6"
          />

          {/* Description Section */}
          <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Flick Cafe</h1>
            <p className="text-lg leading-relaxed">
            Flick Cafe is a coffee shop and cinema hybrid in Burnaby that combines 1920s art deco charm with a modern vibe. It offers freshly brewed coffee, classic movie snacks, and nightly film screenings, with weekend polls letting customers choose the movie. Perfect for movie lovers and coffee enthusiasts, Flick Cafe creates a unique and welcoming space for all ages to relax and enjoy.
            </p>
          </section>

          {/* Introduction and Role Section */}
          <div className="flex flex-col tex-center justify-center items-center lg:flex-row gap-16 w-full max-w-5xl mx-auto mt-10 mb-10 bg-coffee p-10 rounded-lg">
            {/* Introduction Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              For this project, I collaborated with three other team member over the course of 20 weeks to develop a fully coded web app. Our goal was to create an application that implemented APIs and dynamic content, delivering an interactive, app-like final product.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              PINE was the result of this effort, showcasing a seamless integration of functionality and design while addressing real-world challenges through innovative solutions. The project emphasized user experience, responsive design, and efficient use of APIs to deliver a polished, functional application.
              </p>
            </div>

            {/* Role Section */}
            <div className="flex-1 text-center items-center justify-center lg:ml-8">
              <h2 className="text-3xl text-center font-bold">Date</h2>
              <p className="text-lg text-center leading-relaxed text-gray-700 mt-1 mb-3">
                October-December 2024
                <br />
              </p>
              <h2 className="text-3xl text-center font-bold">Role</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                UI/UX Designer
                <br />
              </p>
              <h2 className="text-3xl text-center font-bold">Skills</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                User Research
                <br />
                Figma
              </p>
              <Button
                text="View The prototype!"
                onClick={() => window.open("https://www.figma.com/proto/qMNoFwA4s0f5TG1hRUvLny/FlickCafe---Set-G-(Copy)?node-id=1438-773&p=f&t=SzmonO9W0z2uQoLa-1&scaling=scale-down&content-scaling=fixed&page-id=1438%3A583&starting-point-node-id=1438%3A773", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>

        {/* Interface + Design Choice Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Interface and Design</h1>
        </section>
        {/* Carousel Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[500px]">
            {designCarouselImages.map((image, index) => {
                const position =
                (index - designCurrentIndex + designCarouselImages.length) % designCarouselImages.length;

                let transform = "";
                let blur = "";
                let opacity = "";
                let zIndex = 0;

                if (position === 0) {
                // Center card
                transform = "translate-x-0 scale-100";
                blur = "blur-none";
                opacity = "opacity-100";
                zIndex = 20;
                } else if (position === 1 || position === designCarouselImages.length - 1) {
                // Side cards
                transform =
                    position === 1 ? "translate-x-72 scale-90" : "-translate-x-72 scale-90";
                blur = "blur-md";
                opacity = "opacity-75";
                zIndex = 10;
                } else {
                // Hidden cards
                transform = "translate-x-0 scale-70";
                blur = "blur-lg";
                opacity = "opacity-0";
                zIndex = 0;
                }

                return (
                <div
                    key={image.id}
                    className={`absolute transition-all duration-500 ease-in-out transform ${transform} ${blur} ${opacity}`}
                    style={{ zIndex }}
                >
                    <div className="bg-white rounded-lg shadow-lg p-8 w-[500px] h-[600px] flex flex-col items-center text-center">
                    <div className="relative w-[480px] h-[400px] mb-6">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        className="items-center justify-center object-cover w-full h-full rounded-lg"
                        />
                    </div>
                    <h3 className="text-base text-gray-500 font-bold mb-4">{image.type}</h3>
                    <Image
                        src={logo}
                        alt="reachout logo"
                        className="w-12 h-12 mt-6 p-2 bg-ylnMnBlue bg-opacity-10 rounded-full"
                    />
                    </div>
                </div>
                );
            })}
            </div>

            {/* Nav buttons */}
            <button
            onClick={handleDesignPrev}
            className="absolute top-1/2 left-16 sm:left-20 md:left-32 lg:left-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8594;
            </button>
            <button
            onClick={handleDesignNext}
            className="absolute top-1/2 right-16 sm:right-20 md:right-32 lg:right-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8592;
            </button>
        </div>
        </div>
    {/* Our Screens Section */}
      <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Our Screens</h2>
            <p className="text-lg text-gray-700 mb-6">
              View Our Designs
            </p>
            
          </div>
         {/* Animated Vertical Scrolling Display */}
         <div className="relative w-[500px] h-[800px] overflow-hidden rounded-lg p-4 items-center justify-center">
          <div className="absolute flex flex-col items-center gap-8 animate-scroll">
            {screenImages.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-[450px] h-[500px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full rounded-lg shadow-md"
                  />
                </div>
                <p className="text-gray-700 text-center mt-2">{image.type}</p>
              </div>
            ))}
          </div>
        </div>

        </section>
      </main>

      {/* Footer */}
      <Footer />
      <style jsx>{`
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default FlickCafe;
