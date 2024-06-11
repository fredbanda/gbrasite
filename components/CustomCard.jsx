// src/components/Card.jsx
import React from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from './ui/card';

const CustomCard = ({ title, description, link }) => {
  return (
    <Card className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <CardHeader asChild className="bg-gray-700 p-4 text-center text-[20px] text-white">
        <p variant="h5" color="blue-gray">
          {title}
        </p>
      </CardHeader>
      <CardDescription className="p-4">
        <p className='text-gray-500'>
          {description}
        </p>
      </CardDescription>
      <CardFooter className="bg-gray-700 p-4 text-[20px] ">
        <a href={link} className="text-blue-500 hover:underline text-center">
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;

