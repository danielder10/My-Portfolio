"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import CardStack from "@/components/CardStack";


const Soda = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center transition-opacity duration-500"
      style={{ 
        backgroundImage: "url('/sodabg.jpeg')",
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
          <img
            src="/soda.png"
            alt="Pine Mockup"
            className="mx-auto w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto max-w-[700px] mb-6"
          />
            

          {/* Description Section */}
          <section className="text-left max-w-3xl mx-auto p-10 bg-coffee rounded-lg mb-12">
            <h1 className="text-5xl font-bold mb-4">Arctic Fizz Soda</h1>
            <p className="text-lg leading-relaxed mb-2">
            Arctic Fizz Soda is a premium soda brand that brings a refreshing twist to classic cream soda flavors. Inspired by the purity of Arctic landscapes, the brand is known for its smooth, creamy textures and bold yet balanced flavors.
            </p>
            <p className="text-lg leading-relaxed">
            The brand offers three distinct varieties:
            </p>
            <li><b>Oranite</b> – A citrus-infused cream soda with a smooth and tangy finish. </li>
            <li><b>Chocolite</b> – A rich chocolate cream soda that blends deep cocoa notes with velvety cream. </li>
            <li><b>Vanilite</b> – A crisp and cool vanilla cream soda, delivering a refreshing and frosty experience. </li>
            <p className="text-lg leading-relaxed mt-3">
            With its visually appealing packaging and high-quality ingredients, Arctic Fizz Soda aims to deliver a nostalgic yet modern taste experience for soda lovers.
            </p>
          </section>

          {/* Introduction and Role Section */}
          <div className="flex flex-col tex-center justify-center items-center lg:flex-row gap-16 w-full max-w-5xl mx-auto mt-10 mb-10 bg-coffee p-10 rounded-lg">
            {/* Introduction Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              For this project, I independently developed Arctic Fizz Soda, a visually appealing and brand-focused packaging design created for a school assignment. Over the course of 2 weeks, I conceptualized and designed three unique soda flavors—Oranite, Chocolite, and Vanilite—each with its own distinct theme and aesthetic.
              </p>
              <p className="text-lg leading-relaxed text-left text-gray-700 mb-2">
              From initial concept to final execution, I crafted the branding, packaging dielines, and mockups to create a cohesive and market-ready look. The project emphasized strong visual storytelling, effective typography, and engaging design elements, resulting in a final product that showcased my ability to blend creativity, technical skill, and branding expertise into a professional presentation.
              </p>
            </div>

            {/* Role Section */}
            <div className="flex-1 text-center items-center justify-center lg:ml-8">
              <h2 className="text-3xl text-center font-bold">Timeline</h2>
              <p className="text-lg text-center leading-relaxed text-gray-700 mt-1 mb-3">
                2 Weeks
                <br />
              </p>
              <h2 className="text-3xl text-center font-bold">Role</h2>
                <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                Package Designer
                </p>
                <br />
              <h2 className="text-3xl text-center font-bold">Skills</h2>
              <p className="text-lg leading-relaxed text-gray-700 mt-1 mb-3 text-left md:text-center">
                Adobe Illustrator
                <br></br>
                Adobe Photoshop
              </p>
              <Button
                text="Visit My Behance!"
                onClick={() => window.open("https://www.behance.net/gallery/220074119/ArcticFizz-Soda", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>
          <section className="text-left max-w-6xl mx-auto bg-coffee p-10 rounded-lg mb-12">
            <CardStack/>
            </section>
            <br></br>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Soda;
