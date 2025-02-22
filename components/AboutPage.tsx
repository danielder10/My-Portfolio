"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AboutPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:danielrobertder@gmail.com?subject=Contact from ${email}&body=${message}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center p-6">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6 text-center">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <Image
              src="/daniel.png"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full border-4 border-gray-300"
            />
          </div>

          {/* About Me Section */}
          <h1 className="text-4xl text-gray-700 font-bold mt-4">Daniel Robert Der</h1>
          <p className="text-gray-600">Front-End Web Designer & Developer</p>
          <p className="mt-4 text-gray-700">
            Passionate about creating sleek and functional user experiences with
            modern front-end technologies. I specialize in building responsive
            and accessible web applications using Next.js, TypeScript, and
            Tailwind CSS.
          </p>
          {/* Resume Button */}
          <div className="mt-4">
            <a
              href="/Daniel_Der_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-button text-white py-2 px-4 rounded hover:bg-button2"
            >
              View My Resume
            </a>
          </div>
          
          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-gray-700">
              <li className="bg-button p-2 rounded-lg text-white">Next.js</li>
              <li className="bg-button p-2 rounded-lg text-white">TypeScript</li>
              <li className="bg-button p-2 rounded-lg text-white">Tailwind CSS</li>
              <li className="bg-button p-2 rounded-lg text-white">Html + Html5</li>
              <li className="bg-button p-2 rounded-lg text-white">JavaScript</li>
              <li className="bg-button p-2 rounded-lg text-white">CSS</li>
              <li className="bg-button p-2 rounded-lg text-white">React</li>
              <li className="bg-button p-2 rounded-lg text-white">UI/UX Design</li>
              <li className="bg-button p-2 rounded-lg text-white">Figma</li>
              <li className="bg-button p-2 rounded-lg text-white">Adobe AfterEffects</li>
              <li className="bg-button p-2 rounded-lg text-white">Adobe Illustrator</li>
              <li className="bg-button p-2 rounded-lg text-white">Adobe Photoshop</li>
              <li className="bg-button p-2 rounded-lg text-white">Adobe Premiere Pro</li>
              <li className="bg-button p-2 rounded-lg text-white">Godot</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
              <input
                type="email"
                className="p-2 border border-gray-300 rounded w-full max-w-md"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className="p-2 border border-gray-300 rounded w-full max-w-md mt-2"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-button text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
