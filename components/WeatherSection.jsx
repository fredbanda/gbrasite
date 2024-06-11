// src/App.jsx
import WeatherComponent from "../app/weather/page"
import React from 'react';
import ContentSection from "./sections-added/ContentSection";


const WeatherSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-start w-full p-4">
        <div className="md:w-1/3 w-full p-2">
          <WeatherComponent />
        </div>
        <div className="md:w-2/3 w-full p-2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Other content goes here */}
            <ContentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;
