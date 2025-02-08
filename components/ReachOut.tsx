"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import designOne from "../public/hero.png";
import designTwo from "../public/Mockup.png";
import designThree from "../public/color.png";
import designFour from "../public/impact.png";
import designFive from "../public/feature.png";
import designSix from "../public/story.png";
import challengeOne from "../public/hero.png";
import challengeTwo from "../public/Mockup.png";
import challengeThree from "../public/color.png";
import challengeFour from "../public/impact.png";
import challengeFive from "../public/feature.png";
import challengeSix from "../public/story.png";
import logo from "../public/rlogo.png"; 
import competitorLogo from "../public/indeed.png";

const ReachOut = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  const [designCurrentIndex, setDesignCurrentIndex] = useState(0);
  const [challengeCurrentIndex, setChallengeCurrentIndex] = useState(0);

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

  const handleChallengeNext = () => {
    setChallengeCurrentIndex(
      (prevIndex) => (prevIndex + 1) % challengeCarouselImages.length
    );
  };

  const handleChallengePrev = () => {
    setChallengeCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + challengeCarouselImages.length) %
        challengeCarouselImages.length
    );
  };

  const designCarouselImages = [
    {
      src: designOne,
      alt: "Design Feature 1",
      id: 1,
      issue: "Hero Section Design",
      type: "Interface + Design Choice",
      sum: "A bold hero section featuring the app's logo and a clear call-to-action for users to get started.",
    },
    {
      src: designTwo,
      alt: "Design Feature 2",
      id: 2,
      issue: "Mockup Presentation",
      type: "Design Choice",
    },
    {
      src: designThree,
      alt: "Design Feature 3",
      id: 3,
      issue: "Color Palette",
      type: "Design Choice",
    },
    {
      src: designFour,
      alt: "Design Feature 4",
      id: 4,
      issue: "Impact Metrics",
      type: "Interface",
    },
    {
      src: designFive,
      alt: "Design Feature 5",
      id: 5,
      issue: "Feature Highlights",
      type: "Interface",
    },
    {
      src: designSix,
      alt: "Design Feature 6",
      id: 6,
      issue: "Storytelling",
      type: "Design Choice",
    },
  ];

  const challengeCarouselImages = [
    {
      src: challengeOne,
      alt: "Challenge 1",
      id: 1,
      issue: "Hero Section Challenge",
      type: "Design Challenge",
      sum: "Making the hero section visually striking while ensuring accessibility and clarity.",
    },
    {
      src: challengeTwo,
      alt: "Challenge 2",
      id: 2,
      issue: "Layout Challenge",
      type: "Interface Challenge",
      sum: "Designing a clean, intuitive layout that supports user navigation and responsiveness.",
    },
    {
      src: challengeThree,
      alt: "Challenge 3",
      id: 3,
      issue: "Color Palette Challenge",
      type: "Design Challenge",
      sum: "Balancing the color scheme for aesthetic appeal and readability across devices.",
    },
    {
      src: challengeFour,
      alt: "Challenge 4",
      id: 4,
      issue: "Impact Metrics Challenge",
      type: "Interface Challenge",
      sum: "Presenting dynamic metrics without overwhelming the user experience.",
    },
    {
      src: challengeFive,
      alt: "Challenge 5",
      id: 5,
      issue: "Interactive Features Challenge",
      type: "Design Challenge",
      sum: "Ensuring progress tracking and job-matching visuals are engaging and functional.",
    },
    {
      src: challengeSix,
      alt: "Challenge 6",
      id: 6,
      issue: "Storytelling Challenge",
      type: "Design Challenge",
      sum: "Creating a seamless carousel of user success stories with compelling visuals.",
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
          <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
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
              At ReachOut, we are building an innovative application to tackle the pressing challenge of reintegration for individuals impacted by incarceration. Our mission is to create meaningful pathways to employment, empower individuals in their transition back into society, and reduce recidivism by fostering opportunity and support.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              The app leverages artificial intelligence to connect users with job opportunities tailored to their unique skills and experiences. By providing personalized recommendations and seamless access to resources, ReachOut bridges the gap between individuals seeking employment and organizations committed to second-chance hiring.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              In collaboration with forward-thinking employers and community partners, ReachOut goes beyond job placement to instill confidence and equip users with the tools needed to rebuild their lives and contribute positively to their communities.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              This project embodies our commitment to inclusivity and social impact, working toward a future where everyone has the opportunity to thrive.
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
        {/* Problem Statement Section */}
          <section className="text-center py-8 bg-white">
            <h2 className="text-5xl font-bold mb-4">Problem Statement</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-left">
            Individuals impacted by incarceration face significant challenges in reintegrating into society, including limited access to employment opportunities, social stigma, and a lack of resources tailored to their unique needs. These barriers not only hinder personal growth and financial stability but also contribute to higher rates of recidivism, perpetuating cycles of disadvantage. Employers, on the other hand, often struggle to find and connect with skilled individuals willing to contribute meaningfully, particularly within second-chance hiring initiatives. There is a critical need for a solution that bridges this gap, empowering individuals to rebuild their lives while enabling organizations to embrace more inclusive hiring practices.
            </p>
          </section>
        {/* Interface + Design Choice Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
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

        {/* Carousel Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[500px]">
            {designCarouselImages.map((image, index) => {
                const position =
                    (index - designCurrentIndex + designCarouselImages.length) %
                    designCarouselImages.length;

                let transform = "";
                let blur = "";
                let opacity = "";
                let zIndex = 0;

                if (position === 0) {
                    transform = "translate-x-0 scale-100";
                    blur = "blur-none";
                    opacity = "opacity-100";
                    zIndex = 20;
                } else if (position === 1 || position === designCarouselImages.length - 1) {
                    transform = position === 1 ? "translate-x-72 scale-90" : "-translate-x-72 scale-90";
                    blur = "blur-md";
                    opacity = "opacity-75";
                    zIndex = 10;
                } else {
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
                    <div className="w-[300px] h-[200px] mb-6">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover mt-14"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold mt-14">{image.issue}</h3>
                    <p className="text-base text-gray-500 mb-4">{image.type}</p>
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
        {/* Challenges Section */}
        <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12">
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

        {/* Carousel Challenge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative w-full max-w-6xl mx-auto py-16">
            <div className="relative flex items-center justify-center h-[500px]">
            {challengeCarouselImages.map((image, index) => {
                const position =
                    (index - challengeCurrentIndex + challengeCarouselImages.length) %
                    challengeCarouselImages.length;

                let transform = "";
                let blur = "";
                let opacity = "";
                let zIndex = 0;

                if (position === 0) {
                    transform = "translate-x-0 scale-100";
                    blur = "blur-none";
                    opacity = "opacity-100";
                    zIndex = 20;
                } else if (position === 1 || position === challengeCarouselImages.length - 1) {
                    transform = position === 1 ? "translate-x-72 scale-90" : "-translate-x-72 scale-90";
                    blur = "blur-md";
                    opacity = "opacity-75";
                    zIndex = 10;
                } else {
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
                  <div className="w-[300px] h-[200px] mb-6">
                      <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover mt-14"
                      />
                  </div>
                  <h3 className="text-2xl font-semibold mt-14">{image.issue}</h3>
                  <p className="text-base text-gray-500 mb-4">{image.type}</p>
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
            onClick={handleChallengePrev}
            className="absolute top-1/2 left-16 sm:left-20 md:left-32 lg:left-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8594;
            </button>
            <button
            onClick={handleChallengeNext}
            className="absolute top-1/2 right-16 sm:right-20 md:right-32 lg:right-96 transform -translate-y-1/2 bg-button rounded-full p-4 hover:bg-button2 z-30 opacity-80"
            >
            &#8592;
            </button>
        </div>
        </div>
        <section className="px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-4">Competitor Analysis</h2>
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Indeed</h3>
                <p className="text-base text-gray-600 mb-6">
                A global job search platform that connects employers with job seekers, offering tools for job postings, resume uploads, and company reviews.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <p className="text-base text-gray-600">
                    <strong>Job Search Functionality:</strong> Both platforms allow users to search for jobs tailored to their skills and preferences.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <p className="text-base text-gray-600">
                    <strong>Resume Uploads:</strong> Users can upload or create resumes to share with potential employers.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <p className="text-base text-gray-600">
                    <strong>Application Tracking:</strong> A feature to track job applications and statuses.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <Image
                  src={competitorLogo}
                  alt="OlaShare Logo"
                  width={150}
                  height={150}
                  className="mb-4 mt-14"
                />
                <h3 className="text-xl font-semibold text-gray-800">Indeed</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReachOut;
