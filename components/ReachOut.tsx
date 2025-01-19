"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReachOut = () => {
  return (
    <div className="flex-grow flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Reach Out</h1>
          <p className="text-lg mt-4">
            yadadyaydya
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReachOut;
