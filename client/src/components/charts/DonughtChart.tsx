


// import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';
import {  useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
// import { DefaultizedPieValueType, PieItemIdentifier } from '@mui/x-charts';


type Data = { label: string, value: number, color: string }[]


// WIP: Fix highlight styles, responsiveness



export default function DonughtChart() {
    // const theme = useSelector((state: RootState) => state.theme.value)
    // const [highlight, setHighlight] = useState<React.ReactNode>("Revenue")


    const [data, ] = useState<Data>(
        [
            { label: 'Manufacturing', value: 430, color: "#283368" },
            { label: 'Repair', value: 210, color: "#FE3494" },
            { label: 'Polish', value: 515, color: "#2A7C9E" },
            { label: 'Packaging', value: 150, color: "#5DC4DA" },
        ]
    )


    // const StyledText = styled('text')(({ }) => ({
    //     fill: "#5DC4DA",
    //     textAnchor: 'middle',
    //     dominantBaseline: 'central',
    //     fontSize: 20,
    //     fontWeight: "600"
    // }));

    // function PieCenterLabel({ children }: { children: React.ReactNode }) {
    //     const { width, height, left, top } = useDrawingArea();
    //     return (
    //         <StyledText x={left + width / 2} y={top + height / 2}>
    //             {children}
    //         </StyledText>
    //     );
    // }




    return (
        <PieChart
            series={[
                {
                    innerRadius: 50,
                    outerRadius: 130,
                    endAngle: 360,
                    data: data,
                    // highlightScope: { fade: 'global', highlight: 'item' },
                    // faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            width={400}
            height={300}
            slotProps={{
                legend: { hidden: true },
            }}

        >

        </PieChart>
    );
}


