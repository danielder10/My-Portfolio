"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageComparison from "@/components/ImageComparison"
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
import logo from "../public/rlogo.png"; 
import competitorLogo from "../public/indeed.png";

const ReachOut = () => {
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

  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center transition-opacity duration-500"
      style={{ 
        backgroundImage: "url('/reachoutbg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <div className="text-center"/>
          {/* Centered and Resized Image */}
          <video className="mx-auto w-3/4 md:w-2/3 lg:w-1/2 h-auto mb-6" controls>
          <source src="/Promo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>

          {/* Description Section */}
          <section className="text-left max-w-3xl mx-auto p-10 rounded-lg mb-12 bg-coffee">
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
              <br/>
              <br/>
              <Button
                text="View Our Blog"
                onClick={() => window.open("https://reach-out-blog.vercel.app", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>
        {/* Problem Statement Section */}
          <section className="text-center py-8 mx-auto p-10 rounded-lg bg-coffee">
            <h2 className="text-5xl font-bold mb-4">Problem Statement</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-left">
            Individuals impacted by incarceration face significant challenges in reintegrating into society, including limited access to employment opportunities, social stigma, and a lack of resources tailored to their unique needs. These barriers not only hinder personal growth and financial stability but also contribute to higher rates of recidivism, perpetuating cycles of disadvantage. Employers, on the other hand, often struggle to find and connect with skilled individuals willing to contribute meaningfully, particularly within second-chance hiring initiatives. There is a critical need for a solution that bridges this gap, empowering individuals to rebuild their lives while enabling organizations to embrace more inclusive hiring practices.
            </p>
          </section>
          {/* User Flow Section */}
        <section className="px-4 py-12 ">
          <div className="max-w-4xl mx-auto text-center bg-coffee p-10 rounded-lg">
            <h2 className="text-5xl font-bold mb-4">User Flow</h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore the structured journey users take through ReachOut, from onboarding to job application, with an interactive user flow diagram.
            </p>

            {/* Userflow */}
            <div className="relative w-full max-w-3xl mx-auto">
            <Image
                src={"/reachout-userflow.png"}
                alt="ReachOut User Flow"
                layout="responsive"
                width={800}
                height={600}
                className="rounded-lg border border-gray-300 shadow-md"
              />
            </div>

            {/* Button to Open in New Tab */}
            <div className="mt-6">
              <a
                href="https://www.figma.com/board/QQ7OsXhkE0rXtvPwP21aOx/User-Flow---ReachOut?node-id=0-1&t=kvoQ6dR9m7Omfgg7-1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-button text-white text-lg font-semibold rounded-lg hover:bg-button2"
              >
                Open in Figma
              </a>
            </div>
          </div>
        </section>

{/* Comp Analysis section */}
<section className="px-4 py-12 mx-auto bg-coffee p-10 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-4 text-center">Competitor Analysis</h2>
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
        <br></br>
        <div className="flex flex-wrap justify-center gap-10 px-4 py-12">
  {/* User Research Findings */}
  <section className="bg-coffee p-10 rounded-lg max-w-2xl">
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4">User Research Findings</h2>
      <p className="text-lg text-gray-700 mb-6">
        Explore our research insights on job-seeking challenges and solutions for ex-offenders.
      </p>

      {/* Embedded PDF Viewer */}
      <div className="relative w-full h-[600px] border overflow-hidden">
        <embed
          src="/user_research.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="rounded-lg border-none"
        />
      </div>
    </div>
  </section>

  {/* User Personas */}
  <section className="bg-coffee p-10 rounded-lg max-w-2xl">
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4">User Personas</h2>
      <p className="text-lg text-gray-700 mb-6">
        Gain insights into our detailed user personas, representing the key stakeholders and their 
        unique challenges, motivations, and behaviors in the job-seeking process.
      </p>

      {/* Embedded PDF Viewer */}
      <div className="relative w-full h-[600px] border overflow-hidden">
        <embed
          src="/user_persona.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="rounded-lg border-none"
        />
      </div>
    </div>
  </section>
</div>
        <br></br>
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
        <section className="text-left max-w-6xl mx-auto bg-coffee p-10 rounded-lg mb-12">
        <ImageComparison/>
        </section>
        <br></br>
       {/* Carousel Wrapper with relative positioning */}
        <div className="relative w-full max-w-6xl mx-auto bg-coffee p-10 rounded-lg py-8 sm:py-12 lg:py-16">
          <div className="relative flex items-center justify-center w-full max-w-4xl h-[400px] sm:h-[500px] overflow-hidden">
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
                transform = position === 1 ? "translate-x-24 sm:translate-x-36 scale-90" : "-translate-x-24 sm:-translate-x-36 scale-90";
                blur = "blur-md";
                opacity = "opacity-80";
                zIndex = 10;
              } else {
                transform = "translate-x-0 scale-80";
                blur = "blur-lg";
                opacity = "opacity-0";
                zIndex = 0;
              }

              return (
                <div
                  key={image.id}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${transform} ${blur} ${opacity}`}
                  style={{ zIndex }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-[300px] sm:w-[384px] h-[400px] sm:h-[480px] flex flex-col items-center text-center">
                    <div className="w-[250px] sm:w-[300px] h-[160px] sm:h-[200px] mb-4 sm:mb-6">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover mt-6 sm:mt-14"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-14">{image.issue}</h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-2 sm:mb-4">{image.type}</p>
                    <Image
                      src={logo}
                      alt="reachout logo"
                      className="w-10 sm:w-12 h-10 sm:h-12 mt-4 sm:mt-6 p-2 bg-ylnMnBlue bg-opacity-10 rounded-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav buttons - Now correctly positioned next to the carousel */}
          <button
            onClick={handleDesignPrev}
            className="absolute left-4 sm:left-8 md:left-12 lg:left-20 xl:left-24 top-1/2 transform -translate-y-1/2 bg-button rounded-full p-3 sm:p-4 hover:bg-button2 z-30 opacity-80"
          >
            &#8592;
          </button>

          <button
            onClick={handleDesignNext}
            className="absolute right-4 sm:right-8 md:right-12 lg:right-20 xl:right-24 top-1/2 transform -translate-y-1/2 bg-button rounded-full p-3 sm:p-4 hover:bg-button2 z-30 opacity-80"
          >
            &#8594;
          </button>
        </div>
        <br></br>
        {/* Challenges Section */}
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
        <br></br>
      {/* Solutions Section */}
      <section className="text-left max-w-3xl mx-auto bg-coffee p-10 rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Solutions</h1>
            <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">1.</span>
                    <div>
                        <strong>Welcoming Hero Section:</strong> 
                        To make the hero section both engaging and effective, we designed it with a bold, clear call-to-action and a powerful visual that communicates trust and inclusivity. The messaging was carefully crafted to immediately capture user interest, and the layout ensures that key elements—such as the CTA button—are easy to find and interact with.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">2.</span>
                    <div>
                        <strong>Clean Layout:</strong> 
                        The interface was structured with a focus on clarity and ease of navigation. Sections were distinctly separated, and whitespace was utilized effectively to prevent clutter. Responsive design principles were applied to maintain consistency across different screen sizes, ensuring an intuitive experience for all users.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">3.</span>
                    <div>
                        <strong>Consistent Color Scheme:</strong> 
                        We carefully selected a calming yet professional color palette that aligns with ReachOut’s mission. The colors were tested for accessibility, ensuring high contrast for readability and an overall sense of trustworthiness. The design follows brand identity principles while being inclusive for users with visual impairments.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">4.</span>
                    <div>
                        <strong>Impact Highlights:</strong> 
                        Key statistics such as "2000+ job seekers placed" and "500+ nonprofit organizations engaged" were integrated into the interface to provide credibility. The data visualization was designed to be digestible, balancing informative elements with aesthetic appeal. By placing these metrics strategically, users can quickly grasp the impact of the platform.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">5.</span>
                    <div>
                        <strong>Interactive Features:</strong> 
                        The job-matching process was enhanced with AI-powered recommendations, providing personalized job suggestions based on user profiles. A user-friendly dashboard was implemented for progress tracking, ensuring that individuals can monitor their applications and career development effectively.
                    </div>
                </li>
                <li className="flex items-start">
                    <span className="text-xl font-semibold mr-2">6.</span>
                    <div>
                        <strong>Success Stories:</strong> 
                        To humanize the platform and build trust, we incorporated a dynamic testimonial carousel. This section highlights real-life stories from individuals who successfully transitioned into employment through ReachOut. The design ensures smooth transitions between stories, keeping users engaged without overwhelming them with excessive content.
                    </div>
                </li>
            </ul>
        </section>
        <div className="flex flex-wrap justify-center gap-10 px-4 py-12">
  {/* BCard - PDF Display */}
  <section className="bg-coffee p-10 rounded-lg max-w-2xl">
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4">Business Cards</h2>
      {/* Embedded PDF Viewer */}
      <div className="relative w-full h-[600px] border overflow-hidden">
        <embed
          src="/ReachOut-BusinessCards.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="rounded-lg border-none"
        />
      </div>
    </div>
  </section>

  {/* Brochure - PDF Display */}
  <section className="bg-coffee p-10 rounded-lg max-w-2xl">
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4">Brochure</h2>
      {/* Embedded PDF Viewer */}
      <div className="relative w-full h-[600px] border overflow-hidden">
        <embed
          src="/ReachOut-Brochure.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="rounded-lg border-none"
        />
      </div>
    </div>
  </section>
</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReachOut;
