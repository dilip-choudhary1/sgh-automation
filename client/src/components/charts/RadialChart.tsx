
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import {  styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { DefaultizedPieValueType, PieItemIdentifier } from '@mui/x-charts';


type Data = { label: string, value: number, color: string }[][]


// WIP: Fix highlight styles 



export default function RadialChart() {
  const theme = useSelector((state: RootState) => state.theme.value)
  const [highlight, setHighlight] = useState<React.ReactNode>("Revenue")


  const [data, setData] = useState<Data>(
    [
      [{ label: 'Etsy', value: 0.5, color: "#5DC4DA"},],
      [{ label: 'Shopify', value: 0.4, color: "#FE3494"},],
      [{ label: 'Manual', value: 0.7, color: "#2A7C9E"},],
      [{ label: '', value: 1, color: theme == "light" ? "#E4F3F7" : "#1D2449" },]
    ]
  )

  useEffect(() => {
    setData(
      [
        [{ label: 'Etsy', value: 0.5, color: "#5DC4DA"},],
        [{ label: 'Shopify', value: 0.4, color: "#FE3494"},],
        [{ label: 'Manual', value: 0.7, color: "#2A7C9E"},],
        [{ label: '', value: 1, color: theme == "light" ? "#E4F3F7" : "#1D2449" },]
      ]
    )
  }, [theme])

  const handleClick = (
    _event: React.MouseEvent<SVGPathElement, MouseEvent>, 
    pieItemIdentifier: PieItemIdentifier,
    _item: DefaultizedPieValueType 
  ) => {
    // Convert 'seriesId' to string before slicing
    let itemId = pieItemIdentifier.seriesId.toString().slice(-1);
  
    // Convert 'itemId' back to a number if needed
    if (parseInt(itemId) > 2) {
      setHighlight(
        <span className='text-yellow-500'>
          {`${data[parseInt(itemId) - 3][0].label} - ${data[parseInt(itemId) - 3][0].value * 100}%`}
        </span>
      );
  
      console.log(highlight);
    }
  };
  


  const StyledText = styled('text')(({ }) => ({
    fill: "#5DC4DA",
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
    fontWeight: "600"
  }));
  
  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
  
  


  return (
    <PieChart
      series={[
        {
          innerRadius: 80,
          outerRadius: 90,
          endAngle: 360,
          data: data[3],
        },
        {
          innerRadius: 100,
          outerRadius: 110,
          endAngle: 360,
          data: data[3],
        },
        {
          innerRadius: 120,
          outerRadius: 130,
          endAngle: 360,
          data: data[3],
        },
        {
          innerRadius: 80,
          outerRadius: 90,
          endAngle: data[0][0].value * 360,
          cornerRadius: 40,
          data: data[0],
        },
        {
          innerRadius: 100,
          outerRadius: 110,
          endAngle: data[1][0].value * 360,
          cornerRadius: 40,
          data: data[1],
        },
        {
          innerRadius: 120,
          outerRadius: 130,
          endAngle: data[2][0].value * 360,
          cornerRadius: 40,
          data: data[2],
        },
      ]}
      onItemClick={handleClick}
      width={400}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
      tooltip={{
        trigger: 'none'
      }}
    >
      <PieCenterLabel>
        {highlight}
      </PieCenterLabel>
    </PieChart>
  );
}


