"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg mt-4">
            This is where you can write about yourself or your project.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
