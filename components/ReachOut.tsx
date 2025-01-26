"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import challengeOne from "../public/Mockup.png";
import challengeTwo from "../public/Mockup.png";
import challengeThree from "../public/Mockup.png";
import challengeFour from "../public/Mockup.png";
import challengeFive from "../public/Mockup.png";
import challengeSix from "../public/Mockup.png";
import logo from "../public/Mockup.png"; 

const ReachOut = () => {
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
            src="/Mockup.png"
            alt="ReachOut Mockup"
            className="mx-auto w-3/4 md:w-2/3 lg:w-1/2 h-auto mb-6"
          />

          {/* Description Section */}
          <section className="text-left max-w-3xl mx-auto bg-coffee p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Reach Out</h1>
            <p className="text-lg leading-relaxed">
              “ReachOut is a social impact employment app designed to support
              formerly incarcerated individuals by connecting them to tailored
              job opportunities through AI-driven matches, fostering
              second-chance hiring and societal reintegration.”
            </p>
          </section>

          {/* Introduction and Role Section */}
          <div className="flex flex-col tex-center justify-center items-center lg:flex-row gap-16 w-full max-w-5xl mx-auto mt-10 mb-10 bg-coffee p-10 rounded-lg">
            {/* Introduction Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              At ReachOut, we are developing an innovative application designed to address the critical challenge of reintegration for individuals impacted by incarceration. The project focuses on creating meaningful pathways to employment, fostering a smoother transition back into society, and reducing recidivism through empowerment and opportunity.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              Our app harnesses the power of artificial intelligence to match users with job opportunities that align with their unique skills and experiences. By incorporating personalized recommendations and easy access to resources, we aim to bridge the gap between individuals seeking employment and organizations committed to second-chance hiring.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              Through partnerships with forward-thinking employers and community stakeholders, this project aspires to provide users with not only job opportunities but also the confidence and tools to rebuild their lives and make positive contributions to their communities.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              This initiative represents a step toward fostering inclusivity and social impact by creating a future where everyone has the chance to succeed.
              </p>
            </div>

            {/* Role Section */}
            <div className="flex-1 text-center items-center justify-center lg:ml-8">
              <h2 className="text-3xl text-center font-bold">Date</h2>
              <p className="text-lg text-center leading-relaxed text-gray-700 mt-1 mb-3">
                September-December 2024
                <br />
              </p>
              <h2 className="text-3xl text-center font-bold">Role</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                UI/UX Designer
                <br />
                Frontend Developer
                <br />
                Research Analyst
              </p>
              <h2 className="text-3xl text-center font-bold">Skills</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                User Research
                <br />
                Javascript
                <br />
                Tailwind CSS
                <br />
                TypeScript
                <br />
                Next.js / React
                <br />
                Figma
              </p>
              <Button
                text="Visit Reach Out"
                onClick={() => window.open("https://wereachout.ca", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>

        {/* Interface + Design Choice Section */}
        <section className="text-left max-w-3xl mx-auto bg-coffee p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Interface and Design Choices</h1>
            <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">1.</span>
                    <div>
                        <strong>Welcoming Hero Section:</strong> 
                        The homepage features a bold, inviting statement and a call-to-action button ("Get Started Now!") that encourages immediate user engagement. It’s complemented by an image showcasing collaboration and trust.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">2.</span>
                    <div>
                        <strong>Clean Layout:</strong> 
                        A clean, structured design with clearly separated sections, such as "Progress Tracking" and "Resource Database," ensures users can easily find what they need.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">3.</span>
                    <div>
                        <strong>Consistent Color Scheme:</strong> 
                        The calming green and neutral grey palette communicates trust and professionalism while providing visual appeal.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">4.</span>
                    <div>
                        <strong>Impact Highlights:</strong> 
                        Metrics like "2000+ job seekers placed" and "500+ nonprofit organizations engaged" build credibility and reinforce the platform's effectiveness.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">5.</span>
                    <div>
                        <strong>Interactive Features:</strong> 
                        Progress tracking, personalized job matching, and intuitive buttons like "View Progress" enhance usability and functionality.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">6.</span>
                    <div>
                        <strong>Success Stories:</strong> 
                        A dynamic carousel of testimonials highlights real-life examples of the platform’s success, creating an emotional connection.
                    </div>
                </li>
            </ul>
        </section>

        {/* Carousel Instead of Static Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-5xl mx-auto py-12">
            <div className="relative flex items-center justify-center h-[350px]">
              {carouselImages.map((image, index) => {
                const position =
                  (index - currentIndex + carouselImages.length) %
                  carouselImages.length;

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
                    position === 1 ? "translate-x-60 scale-75" : "-translate-x-60 scale-75";
                  blur = "blur-md";
                  opacity = "opacity-75";
                  zIndex = 10;
                } else {
                  // Hidden cards
                  transform = "translate-x-0 scale-50";
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
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 h-96 flex flex-col items-center text-center">
                      <div className="w-28 h-28 mb-4">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{image.issue}</h3>
                      <p className="text-sm text-gray-500 mb-4">{image.type}</p>
                      <p className="text-sm text-spaceCadet-700">{image.sum}</p>
                      <Image src={logo} alt="reachout logo" className="w-10 h-10 mt-5 p-2 bg-ylnMnBlue bg-opacity-10 rounded-full" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nav buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-96 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
            >
              &#8594;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-96 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
            >
              &#8592;
            </button>
          </div>
        </div>
        {/* Interface + Design Choice Section */}
        <section className="text-left max-w-3xl mx-auto bg-coffee p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Challenges</h1>
            <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">1.</span>
                    <div>
                        <strong>Welcoming Hero Section:</strong> 
                        Making the statement and call-to-action visually striking while ensuring the hero image conveys collaboration.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">2.</span>
                    <div>
                        <strong>Clean Layout:</strong> 
                        Designing intuitive, distinct sections that remain responsive and uncluttered.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">3.</span>
                    <div>
                        <strong>Consistent Color Scheme:</strong> 
                        Balancing the palette for appeal, accessibility, and cohesive branding.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">4.</span>
                    <div>
                        <strong>Impact Highlights:</strong> 
                        Presenting metrics dynamically without overwhelming users.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">5.</span>
                    <div>
                        <strong>Interactive Features:</strong> 
                        Ensuring progress tracking and job matching are functional, intuitive, and responsive.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">6.</span>
                    <div>
                        <strong>Success Stories:</strong> 
                        Creating a seamless carousel that feels engaging and authentic across all devices.
                    </div>
                </li>
            </ul>
        </section>

        {/* Carousel Instead of Static Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-5xl mx-auto py-12">
            <div className="relative flex items-center justify-center h-[350px]">
              {carouselImages.map((image, index) => {
                const position =
                  (index - currentIndex + carouselImages.length) %
                  carouselImages.length;

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
                    position === 1 ? "translate-x-60 scale-75" : "-translate-x-60 scale-75";
                  blur = "blur-md";
                  opacity = "opacity-75";
                  zIndex = 10;
                } else {
                  // Hidden cards
                  transform = "translate-x-0 scale-50";
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
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 h-96 flex flex-col items-center text-center">
                      <div className="w-28 h-28 mb-4">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{image.issue}</h3>
                      <p className="text-sm text-gray-500 mb-4">{image.type}</p>
                      <p className="text-sm text-spaceCadet-700">{image.sum}</p>
                      <Image src={logo} alt="reachout logo" className="w-10 h-10 mt-5 p-2 bg-ylnMnBlue bg-opacity-10 rounded-full" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nav buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-96 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
            >
              &#8594;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-96 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
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

export default ReachOut;
