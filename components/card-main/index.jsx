"use client"
// src/pages/index.jsx
import React from 'react';
import CustomCard from '../CustomCard';

const MainCard = () => {
  const cards = [
    {
      title: 'Residents',
      description: 'A place to find peae and tranquility to ehance your creativity and desire for more. We are waiting to see you at the next meeting',
      link: '#',
    },
    {
      title: 'Business',
      description: "Whether it's expanding or remote working, there is everything for everyone here in Gordon's Bay so why wait? You too can do this.",
      link: '#',
    },
    {
      title: 'Visitors',
      description: 'You like seeing places while having fun doing that, we have everything to awaken your adrenaline. Contant us for more.',
      link: '#',
    },
  ];

  return (
    <>
    <div className="container mx-auto px-8 py-10">
      <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 text-gray-600">
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default MainCard;
