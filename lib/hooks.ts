import { useEffect, useState } from 'react';

import { mockWeatherAPI } from '@/lib/mock-weather-api';
import { WeatherData } from '@/lib/types';

export const useWeather = () => {
  const [graphData, setGraphData] = useState<WeatherData[]>([]);
  const [newDate, setNewDate] = useState('');
  const [newTemperature, setNewTemperature] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await mockWeatherAPI();
        setGraphData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const storedWeatherData = sessionStorage.getItem('weatherData');
    if (storedWeatherData) {
      setGraphData(JSON.parse(storedWeatherData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  const handleAddEntry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newGraphData = [
      ...graphData,
      { date: newDate, temperature: Number(newTemperature) },
    ];

    setGraphData(newGraphData);
    sessionStorage.setItem('weatherData', JSON.stringify(newGraphData));

    setNewDate('');
    setNewTemperature(0);
  };

  return {
    graphData,
    newDate,
    newTemperature,
    isLoading,
    handleAddEntry,
    setNewDate,
    setNewTemperature,
  };
};
