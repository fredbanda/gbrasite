"use client";

// src/components/WeatherComponent.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const WeatherComponent = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Cape%20Town,ZA&appid=7cc32a7f235f630f8aa45b20a6cdd786&units=metric`
        );
        // Group data by day and limit to 3 days
        const dailyData = response.data.list.filter((reading) => reading.dt_txt.includes("12:00:00")).slice(0, 3);
        setForecast(dailyData);
        setLoading(false);
      } catch (err) {
        setError('Internet connection is required to see weather information');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const convertWindDirection = (degree) => {
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const index = Math.round(degree / 22.5);
    return directions[index % 16];
  };

  const convertSpeedToKmh = (speed) => {
    return Math.round(speed * 3.6); // Convert m/s to km/h
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-slate-100 p-4 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4">3-Day Weather Forecast for Gordon&apos;s Bay</h2>
      <div className="space-y-4">
        {forecast.map((day) => (
          <div key={day.dt} className="bg-gray-200 p-4 rounded-lg shadow-full">
            <h3 className="text-lg font-semibold mb-2">{new Date(day.dt_txt).toLocaleDateString()}</h3>
            <p>Temperature: {day.main.temp}°C</p>
            <p>Humidity: {day.main.humidity}%</p>
            <p>Conditions: {day.weather[0].description}</p>
            <p>Wind Speed: {convertSpeedToKmh(day.wind.speed)} km/h</p>
            <p>Wind Direction: {convertWindDirection(day.wind.deg)}</p>
            <p>Rain Probability: {day.pop * 100}%</p>
            <p>Precipitation: {day.rain ? `${day.rain['3h']} mm` : 'No precipitation'}</p>
          </div>
        ))}
      </div>
      <Button>
        Loadshedding Checker
      </Button>
    </div>
  );
};

export default WeatherComponent;
