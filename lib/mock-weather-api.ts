import { WeatherData } from '@/lib/types';

export const mockWeatherAPI = (): Promise<WeatherData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { date: '2024-09-20', temperature: 20 },
        { date: '2024-09-21', temperature: 22 },
        { date: '2024-09-22', temperature: 18 },
        { date: '2024-09-23', temperature: 19 },
        { date: '2024-09-24', temperature: 17 },
        { date: '2024-09-25', temperature: 21 },
      ]);
    }, 1500);
  });
};
