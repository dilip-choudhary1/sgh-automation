

// import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';


const dataset = [
  { x: new Date(2001, 0, 1), fabricItems: 20, total: 45, furniture: 23, lighting: 10 },
  { x: new Date(2002, 0, 1), fabricItems: 55, total: 15, furniture: 20, lighting: 6 },
  { x: new Date(2003, 0, 1), fabricItems: 20, total: 35, furniture: 15, lighting: 18 },
  { x: new Date(2004, 0, 1), fabricItems: 45, total: 23, furniture: 25, lighting: 15 },
  { x: new Date(2005, 0, 1), fabricItems: 15, total: 19, furniture: 12, lighting: 10 },
  { x: new Date(2006, 0, 1), fabricItems: 50, total: 30, furniture: 14, lighting: 21 },
];

export default function CategoryDistribution({ categoryFilter }: { categoryFilter: string[] }) {
  const colors = ["#5DC4DA", "#FE3494", "#2A7C9E", "#4D61BE"];
  const [filteredSeries, setFilteredSeries] = useState([
    { dataKey: 'fabricItems', color: "#5DC4DA" },
    { dataKey: 'furniture', color: "#FE3494" },
    { dataKey: 'lighting', color: "#2A7C9E" },
    { dataKey: 'total', color: "#4D61BE" },
  ])

  useEffect(() => {
    setFilteredSeries(categoryFilter.map((category, key) => {
      return ({
        dataKey: category,
        color: colors[key]
      })
    }))
  }, [categoryFilter])


  return (
    <LineChart
      dataset={dataset}
      xAxis={
        [{
          scaleType: 'time',
          dataKey: 'x',
          tickNumber: dataset.length

        }]
      }
      series={filteredSeries}
      height={300}
      margin={{ top: 30, bottom: 30 }}
    />
  );
}
