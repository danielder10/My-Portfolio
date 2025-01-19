"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ReachOut = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-white px-4">
        <div className="text-center">
          {/* Centered and Resized Image */}
          <img
            src="/Mockup.png"
            alt="ReachOut Mockup"
            className="mx-auto w-1/2 md:w-1/3 lg:w-1/4 h-auto mb-6"
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
          <div className="flex flex-col lg:flex-row gap-16 w-full max-w-5xl mx-auto mt-10 mb-10 bg-coffee p-10 rounded-lg">
            {/* Introduction Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
                At ReachOut, we are dedicated to helping individuals who have
                been incarcerated find meaningful employment. Our mission is to
                ensure a smoother transition back into society and to reduce
                the chances of re-offending.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
                We understand the challenges that individuals face when
                reintegrating into the workforce. Our innovative app leverages
                artificial intelligence to connect users with job opportunities
                tailored to their skills and experiences.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
                By partnering with various employers who are committed to
                second-chance hiring, we aim to provide our users with the
                support and resources they need to rebuild their lives and
                contribute positively to their communities.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
                Join us in making a difference and helping individuals take
                their first steps toward a brighter future!
              </p>
            </div>

            {/* Role Section */}
            <div className="flex-1 lg:ml-8">
              <h2 className="text-3xl font-bold">Date</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3">
                September-December 2024
                <br />
              </p>
              <h2 className="text-3xl font-bold">Role</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                UI/UX Designer
                <br />
                Frontend Developer
                <br />
                Research Analyst
              </p>
              <h2 className="text-3xl font-bold">Skills</h2>
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
                className="w-auto"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReachOut;
