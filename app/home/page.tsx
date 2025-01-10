"use client"

import Header from '../../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
        <div className="w-1/2 h-96 bg-gray-300 mb-4">Vertical Rectangle (1)</div>
        <div className="w-1/2 h-96 bg-gray-300 mb-4">Vertical Rectangle (2)</div>
        <div className="w-1/2 h-96 bg-gray-300 mb-4">Vertical Rectangle (3)</div>
      </main>
    </div>
  );
};

export default HomePage;