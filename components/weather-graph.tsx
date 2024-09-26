import React from 'react';
import { WeatherData } from '@/lib/types';
import dynamic from 'next/dynamic';

const WeatherGraph = ({
  graphData,
  loading,
}: {
  graphData: WeatherData[];
  loading: boolean;
}) => {
  const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

  if (loading || !graphData.length) {
    return (
      <div className="w-full grid place-content-center">
        Loading weather chart...
      </div>
    );
  }

  return (
    <Plot
      className="grow"
      data={[
        {
          x: graphData?.map((point) => point.date),
          y: graphData?.map((point) => point.temperature),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{
        title: 'Temperature Over Time',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Temperature (°C)' },
      }}
      config={{ responsive: true }}
    />
  );
};

export const WeatherGraphWithMemo = React.memo(WeatherGraph);
