"use client"
// src/pages/index.jsx
import React from 'react';
import LoadSheddingStatus from '../LoadsheddingStatus';
import MainCard from '../card-main';

const Loadshed = () => {
  return (
    <div className="container mx-auto px-8 py-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          {/* Other content can go here */}
            <MainCard />
        </div>
      </div>
    </div>
  );
};

export default Loadshed;
