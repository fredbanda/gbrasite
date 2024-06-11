"use client"

// src/components/LoadSheddingStatus.jsx
// src/components/LoadSheddingStatus.jsx
import React, { useEffect, useState } from 'react';
import { fetchLoadSheddingStatus } from '../utils/api';

const LoadSheddingStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const data = await fetchLoadSheddingStatus();
        setStatus(data);
        console.log('Status set to:', data);
      } catch (error) {
        console.error('Error loading status:', error);
      }
    };

    loadStatus();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto lg:mx-0 lg:ml-auto border-2 m-4 items-center">
      <p variant="h5" color="blue-gray" className="text-center mb-2">
        Load Shedding Status
      </p>
      {status !== null ? (
        <p variant="paragraph" color="gray" className="text-center">
          Current Status: {status <= 0 ? 'No Loadshedding' : status}
        </p>
      ) : (
        <p variant="paragraph" color="gray" className="text-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default LoadSheddingStatus;

