"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import challengeOne from "../public/hero.png";
import challengeTwo from "../public/Mockup.png";
import challengeThree from "../public/color.png";
import challengeFour from "../public/impact.png";
import challengeFive from "../public/feature.png";
import challengeSix from "../public/story.png";
import logo from "../public/Mockup.png"; 

const Pine = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const carouselImages = [
    {
      src: challengeOne,
      alt: "success story 1",
      id: 1,
      issue: "Welcoming Hero Section:",
      type: "Interface + Design Choice",
      sum:
        "A professional and collaborative setting with diverse individuals working together, accompanied by a prominent 'Get Started Now!' button.",
    },
    {
      src: challengeTwo,
      alt: "success story 2",
      id: 2,
      issue: "Clean Layout",
      type: "Interface",
      sum:
        "Sections with clear headings like 'Progress Tracking' and 'Resource Database' for easy navigation.",
    },
    {
      src: challengeThree,
      alt: "success story 3",
      id: 3,
      issue: "Consistent Color Scheme",
      type: "Design Choice",
      sum:
        "Highlighting a soothing green and grey palette, applied cohesively across buttons, backgrounds, and headings.",
    },
    {
      src: challengeFour,
      alt: "success story 4",
      id: 4,
      issue: "Impact Highlights",
      type: "Interface",
      sum:
        "A visually appealing infographic / dashboard displaying '2000+ job seekers placed' and '500+ nonprofit organizations engaged.'",
    },
    {
      src: challengeFive,
      alt: "success story 5",
      id: 5,
      issue: "Interactive Features",
      type: "Interface",
      sum:
        "Buttons indicating user interactivity capabilities, alongside progress bars or job-matching visuals in action are clearly visible.",
    },
    {
      src: challengeSix,
      alt: "success story 6",
      id: 6,
      issue: "Success stories",
      type: "Design Choice",
      sum:
        "We chose a carousel of smiling individuals with captions highlighting their success stories, set against vibrant and engaging backdrops.",
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
          <img
            src="/Mockup2.png"
            alt="ReachOut Mockup"
            className="mx-auto w-3/4 md:w-2/3 lg:w-1/2 h-auto mb-6"
          />

          {/* Description Section */}
          <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Pine</h1>
            <p className="text-lg leading-relaxed">
              “PINE is an innovative food app designed to simplify meal decisions by combining location-based restaurant suggestions and personalized recipe recommendations. By leveraging user preferences and available ingredients, PINE helps reduce food waste while providing convenient options for dining out or cooking at home. It merges the best of food delivery services and recipe finders into one seamless platform.”
            </p>
          </section>

          {/* Introduction and Role Section */}
          <div className="flex flex-col tex-center justify-center items-center lg:flex-row gap-16 w-full max-w-5xl mx-auto mt-10 mb-10 bg-coffee p-10 rounded-lg">
            {/* Introduction Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              At PINE, we are creating an innovative application designed to address the everyday challenge of meal planning and food waste. The project focuses on providing users with quick and convenient solutions, whether they’re searching for nearby dining options or looking to make a meal with ingredients they already have at home.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              Our app integrates location-based services and personalized recipe recommendations to offer a seamless experience. By combining the functionality of food delivery apps and recipe finders, PINE empowers users to save time, reduce waste, and expand their culinary horizons without the need to switch between platforms.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              Through a user-friendly interface and smart categorization, this project aspires to simplify decision-making and encourage sustainable food habits, making dining and cooking an enjoyable and stress-free part of daily life.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              This initiative represents a step toward fostering convenience and sustainability, creating a future where meal decisions are effortless and waste is minimized.
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
                Project Manager
              </p>
              <h2 className="text-3xl text-center font-bold">Skills</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                User Research
                <br />
                Javascript
                <br></br>
                Next.js / React
                <br />
                Figma
                <br />
                API Integration
              </p>
              <Button
                text="Visit The PINE App!"
                onClick={() => window.open("https://pine-app.vercel.app", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>

        {/* Interface + Design Choice Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Interface and Design Choices</h1>
            <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">1.</span>
                    <div>
                        <strong>Consistent Minimalist Design:</strong> 
                        The interface employs a clean and minimal aesthetic with light pastel colors and simple iconography, ensuring a user-friendly experience that avoids visual clutter.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">2.</span>
                    <div>
                        <strong>Step-by-Step Quiz Flow:</strong> 
                        The app uses a structured, step-by-step quiz to gather user preferences, such as dietary restrictions, health goals, and cooking skill levels, making personalization intuitive and easy.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">3.</span>
                    <div>
                        <strong>Tabbed Navigation System:</strong> 
                        A bottom tab bar provides quick access to key sections like Home, Favorites, Search, and FAQ, ensuring seamless navigation between core functionalities.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">4.</span>
                    <div>
                        <strong>Visual Recipe and Dish Recommendations:</strong> 
                        Each dish or recipe is displayed with a high-quality image, ratings, and tags (e.g., "Easy," "Vegan"), catering to visual learners and enhancing the browsing experience.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">5.</span>
                    <div>
                        <strong>Interactive Tutorials:</strong> 
                        A series of tutorial screens guides new users through the app's features, highlighting its core functionalities in a straightforward, digestible format.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">6.</span>
                    <div>
                        <strong>Dynamic Personalization:</strong> 
                        The app customizes the homepage based on user inputs, such as recommended dishes or cuisines, enhancing engagement by tailoring content to individual preferences.
                    </div>
                </li>
            </ul>
        </section>

        {/* Carousel Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[500px]">
            {carouselImages.map((image, index) => {
                const position =
                (index - currentIndex + carouselImages.length) % carouselImages.length;

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
                } else if (position === 1 || position === carouselImages.length - 1) {
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
                    <div className="bg-white rounded-lg shadow-lg p-8 w-[384px] h-[480px] flex flex-col items-center text-center">
                    <div className="w-36 h-36 mb-6">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold">{image.issue}</h3>
                    <p className="text-base text-gray-500 mb-4">{image.type}</p>
                    <p className="text-base text-spaceCadet-700">{image.sum}</p>
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
            onClick={handlePrev}
            className="absolute top-1/2 left-16 sm:left-20 md:left-32 lg:left-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8594;
            </button>
            <button
            onClick={handleNext}
            className="absolute top-1/2 right-16 sm:right-20 md:right-32 lg:right-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8592;
            </button>
        </div>
        </div>
        {/* Challenges Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Challenges</h1>
            <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">1.</span>
                    <div>
                        <strong>Integrating Recipe and Restaurant Data:</strong> 
                        Merging data from recipe databases and local restaurant APIs to provide accurate and personalized suggestions might have been complex, especially with maintaining up-to-date information.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">2.</span>
                    <div>
                        <strong>Designing a Seamless User Experience:</strong> 
                        Balancing simplicity and functionality in the interface while ensuring users could easily navigate between features like recipes, restaurant recommendations, and personalization options.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">3.</span>
                    <div>
                        <strong>Personalization Logic:</strong> 
                        Developing algorithms to tailor recommendations based on user preferences from the quiz (e.g., dietary restrictions, favorite cuisines, and cooking skills) could have been challenging to implement effectively.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">4.</span>
                    <div>
                        <strong>Ensuring Data Accuracy:</strong> 
                        Providing reliable and accurate information about recipes, ingredients, and restaurant locations while accounting for potential discrepancies or outdated data sources.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">5.</span>
                    <div>
                        <strong>Responsive Design and Accessibility:</strong> 
                        Ensuring the app works well across various devices and screen sizes while adhering to accessibility standards (e.g., screen readers, color contrast, and touch-friendly elements).
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">6.</span>
                    <div>
                        <strong>Balancing Features and Performance:</strong> 
                        Adding rich features like image-heavy interfaces, location-based recommendations, and search capabilities without compromising the app's loading time or performance.
                    </div>
                </li>
            </ul>
        </section>

        {/* Carousel Challenges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[500px]">
            {carouselImages.map((image, index) => {
                const position =
                (index - currentIndex + carouselImages.length) % carouselImages.length;

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
                } else if (position === 1 || position === carouselImages.length - 1) {
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
                    <div className="bg-white rounded-lg shadow-lg p-8 w-[384px] h-[480px] flex flex-col items-center text-center">
                    <div className="w-36 h-36 mb-6">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold">{image.issue}</h3>
                    <p className="text-base text-gray-500 mb-4">{image.type}</p>
                    <p className="text-base text-spaceCadet-700">{image.sum}</p>
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
            onClick={handlePrev}
            className="absolute top-1/2 left-16 sm:left-20 md:left-32 lg:left-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8594;
            </button>
            <button
            onClick={handleNext}
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

export default Pine;
