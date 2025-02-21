"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import designOne from "../public/bg1.png";
import designTwo from "../public/bg2.png";
import designThree from "../public/bg4.png";
import designFour from "../public/bg3.png";
import characterOne from "../public/egg.png";
import characterTwo from "../public/duck.png";
import characterThree from "../public/duck2.png";
import characterFour from "../public/owl.png";
import characterFive from "../public/raven.png";
import characterSix from "../public/rooster.png";
import characterSeven from "../public/mole.png";
import characterEight from "../public/chuck.png";
import characterNine from "../public/louis.png";

const QuackAttack = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  const [designCurrentIndex, setDesignCurrentIndex] = useState(0);
  const [characterCurrentIndex, setCharacterCurrentIndex] = useState(0);

  const handleDesignNext = () => {
    setDesignCurrentIndex(
      (prevIndex) => (prevIndex + 1) % designCarouselImages.length
    );
  };

  const handleCharacterNext = () => {
    setCharacterCurrentIndex(
      (prevIndex) => (prevIndex + 1) % characterCarouselImages.length
    );
  };

  const handleDesignPrev = () => {
    setDesignCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + designCarouselImages.length) %
        designCarouselImages.length
    );
  };
  const handleCharacterPrev = () => {
    setCharacterCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + characterCarouselImages.length) %
        characterCarouselImages.length
    );
  };

  const designCarouselImages = [
    {
      src: designOne,
      alt: "success story 1",
      id: 1,
      issue: "Welcoming Hero Section:",
      type: "Barn (spawn, shop/quest area)",
      sum:
        "A professional and collaborative setting with diverse individuals working together, accompanied by a prominent 'Get Started Now!' button.",
    },
    {
      src: designTwo,
      alt: "success story 2",
      id: 2,
      issue: "Clean Layout",
      type: "Outer farm (boss 1 +2 location)",
      sum:
        "Sections with clear headings like 'Progress Tracking' and 'Resource Database' for easy navigation.",
    },
    {
      src: designThree,
      alt: "success story 3",
      id: 3,
      issue: "Consistent Color Scheme",
      type: "City (boss 3 location)",
      sum:
        "Highlighting a soothing green and grey palette, applied cohesively across buttons, backgrounds, and headings.",
    },
    {
      src: designFour,
      alt: "success story 4",
      id: 4,
      issue: "Impact Highlights",
      type: "Bakery (final boss lcoation)",
      sum:
        "A visually appealing infographic / dashboard displaying '2000+ job seekers placed' and '500+ nonprofit organizations engaged.'",
    },
  ];
  const characterCarouselImages = [
    {
      src: characterOne,
      alt: "success story 1",
      id: 1,
      issue: "Welcoming Hero Section:",
      type: "Egg (main character)",
      sum:
        "A professional and collaborative setting with diverse individuals working together, accompanied by a prominent 'Get Started Now!' button.",
    },
    {
      src: characterTwo,
      alt: "success story 2",
      id: 2,
      issue: "Clean Layout",
      type: "Hacthed Duck (main character evolved)",
      sum:
        "Sections with clear headings like 'Progress Tracking' and 'Resource Database' for easy navigation.",
    },
    {
      src: characterThree,
      alt: "success story 3",
      id: 3,
      issue: "Consistent Color Scheme",
      type: "Big Duck (main character final)",
      sum:
        "Highlighting a soothing green and grey palette, applied cohesively across buttons, backgrounds, and headings.",
    },
    {
      src: characterFour,
      alt: "success story 4",
      id: 4,
      issue: "Impact Highlights",
      type: "Owl (NPC/Quest Giver)",
      sum:
        "A visually appealing infographic / dashboard displaying '2000+ job seekers placed' and '500+ nonprofit organizations engaged.'",
    },
    {
      src: characterFive,
      alt: "success story 4",
      id: 5,
      issue: "Impact Highlights",
      type: "Raven (NPC/Shopkeep)",
      sum:
        "A visually appealing infographic / dashboard displaying '2000+ job seekers placed' and '500+ nonprofit organizations engaged.'",
    },
    {
      src: characterSix,
      alt: "success story 5",
      id: 6,
      issue: "Interactive Features",
      type: "Rooster (Boss 1)",
      sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
    {
     src: characterSeven,
     alt: "success story 5",
     id: 7,
     issue: "Interactive Features",
     type: "Mole (Boss 2)",
     sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
    {
      src: characterEight,
      alt: "success story 5",
      id: 8,
      issue: "Interactive Features",
      type: "Chuck (Boss 3)",
      sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
    {
      src: characterNine,
      alt: "success story 5",
      id: 9,
      issue: "Interactive Features",
      type: "Chef Louis (Boss 4)",
      sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-white px-4">
        <div className="text-center"/>
          {/* Centered and Resized Image */}
          <video className="mx-auto w-3/4 md:w-2/3 lg:w-1/2 h-auto mb-6" controls>
          <source src="/Promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
            

          {/* Description Section */}
          <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Quack Attack</h1>
            <p className="text-lg leading-relaxed">
            Quack Attack is a thrilling metroidvania platformer where you play as a fearless duck on a mission to save the farm from starvation. Navigate a perilous world, battle relentless enemies, and face off against the cunning Chef Louis—the mastermind behind the crisis. With fast-paced combat, engaging dialogues, and an immersive world, Quack Attack challenges your skills and determination in an epic adventure where every quack counts!
            </p>
          </section>

          {/* Introduction and Role Section */}
          <div className="flex flex-col tex-center justify-center items-center lg:flex-row gap-16 w-full max-w-5xl mx-auto mt-10 mb-10 bg-coffee p-10 rounded-lg">
            {/* Introduction Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              For this project, I worked alongside three talented team members over the course of 20 weeks to develop Quack Attack, an engaging and interactive game built entirely from scratch for a school project. Our goal was to create a fun, immersive experience that challenged players while showcasing our creativity and technical skills.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              From concept to execution, we designed and coded the game mechanics, visuals, and dynamic features to ensure a smooth and enjoyable gameplay experience. The project emphasized user engagement, responsive controls, and a polished design, resulting in a final product that demonstrated our ability to blend innovation, problem-solving, and teamwork into a fully realized game.
              </p>
            </div>

            {/* Role Section */}
            <div className="flex-1 text-center items-center justify-center lg:ml-8">
              <h2 className="text-3xl text-center font-bold">Date</h2>
              <p className="text-lg text-center leading-relaxed text-gray-700 mt-1 mb-3">
                January-May 2024
                <br />
              </p>
              <h2 className="text-3xl text-center font-bold">Role</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                UI/UX Designer
                <br />
                Frontend Developer
                <br />
                Research Analyst
                <br/>
                Background Designer
              </p>
              <h2 className="text-3xl text-center font-bold">Skills</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                User Research
                <br />
                Html + Css
                <br></br>
                Next.js / React
                <br />
                Figma
                <br />
                Krita (drawing app)
              </p>
              <Button
                text="Visit The QuackAttack Website!"
                onClick={() => window.open("https://quack-attack-website.vercel.app", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>

        {/* Characters Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Characters</h1>
        </section>

        {/* Carousel Characters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[500px]">
            {characterCarouselImages.map((image, index) => {
                const position =
                (index - characterCurrentIndex + characterCarouselImages.length) % characterCarouselImages.length;

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
                } else if (position === 1 || position === characterCarouselImages.length - 1) {
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
                    <div className="bg-white rounded-lg shadow-lg p-8 w-[384px] h-[500px] flex flex-col items-center text-center object-contain">
                    <div className="w- [300px] h-[400px] mb-6">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <h3 className="text-base text-gray-500 font-bold mb-4">{image.type}</h3>
                    </div>
                </div>
                );
            })}
            </div>

            {/* Nav buttons */}
            <button
            onClick={handleCharacterPrev}
            className="absolute top-1/2 left-16 sm:left-20 md:left-32 lg:left-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8594;
            </button>
            <button
            onClick={handleCharacterNext}
            className="absolute top-1/2 right-16 sm:right-20 md:right-32 lg:right-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8592;
            </button>
        </div>
        </div>

        {/*Design Choice Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Landscape/Scene Designs</h1>
        </section>

        {/* Carousel Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[400px]">
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
                    <div className="bg-white rounded-lg shadow-lg p-8 w-[384px] h-[280px] flex flex-col items-center text-center">
                    <div className="w- [300px] h-[200px] mb-6">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        className="items-center justify-center"
                        />
                    </div>
                    <h3 className="text-base text-gray-500 font-bold mb-4">{image.type}</h3>
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QuackAttack;
