"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import SodaImageComparison from "@/components/SodaImageComparison";


const Soda = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("/home");
  };

  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center transition-opacity duration-500"
      style={{ 
        backgroundImage: "url('/pinebg.png')",
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
                text="Visit My Behance!"
                onClick={() => window.open("https://www.behance.net/gallery/220074119/ArcticFizz-Soda", "_blank")}
                type="primary"
                className="w-auto text-center items-center justify-center"
              />
            </div>
          </div>
          <section className="text-left max-w-6xl mx-auto bg-coffee p-10 rounded-lg mb-12">
            <SodaImageComparison/>
            </section>
            <br></br>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Soda;
