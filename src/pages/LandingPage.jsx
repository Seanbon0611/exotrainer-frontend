import React from "react";

const LandingPage = () => {
  return (
    <div className="grid h-full grid-cols-1 text-center">
      <div className="flex justify-center">
        <div className="flex items-center justify-center w-4/5 bg-gray-400 border border-gray-900 h-72">
          <span>Image Goes here</span>
        </div>
      </div>
      <h1 className="pt-6 text-3xl text-gray-900">
        Take your business to a new level
      </h1>
      <p>Signing up only takes a few minutes</p>
      <div className="flex-col">
        <div className="py-2">
          <button className="w-11/12 py-1 border border-gray-900 rounded-3xl">
            Get Started
          </button>
        </div>
        <button className="w-11/12 py-1 text-white bg-gray-900 border rounded-3xl">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
