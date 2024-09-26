'use client';

import { WeatherGraphWithMemo } from '@/components/weather-graph';
import { WeatherForm } from '@/components/weather-form';
import { useWeather } from '@/lib/hooks';

export const WeatherPageContent = () => {
  const {
    graphData,
    newDate,
    newTemperature,
    isLoading,
    handleAddEntry,
    setNewDate,
    setNewTemperature,
  } = useWeather();

  return (
    <div className="flex w-full px-10 gap-8 h-full">
      <WeatherForm
        handleAddEntry={handleAddEntry}
        newDate={newDate}
        setNewDate={setNewDate}
        newTemperature={newTemperature}
        setNewTemperature={setNewTemperature}
      />
      <WeatherGraphWithMemo graphData={graphData} loading={isLoading} />
    </div>
  );
};
