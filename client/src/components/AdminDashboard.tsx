
import { TbCoinFilled } from "react-icons/tb";
import { BsPersonFill } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import NotificationTile from "./NotificationTile";
import RadialChart from "./charts/RadialChart";
import DonughtChart from "./charts/DonughtChart";
import { Stack } from "@mui/material";
// import { LineChart } from "@mui/x-charts";
import CategoryDistribution from "./charts/LineChart";
import CheckboxLegend from "./CheckboxLegend";
import {  useState } from "react";



const notifications = [
    {
        headline: "8 products shipped",
        timestamp: "26 Sept 2024 8:00pm",
        by: "Dilip"
    },
    {
        headline: "8 products shipped",
        timestamp: "26 Sept 2024 8:00pm",
        by: "Dilip"
    },
    {
        headline: "8 products shipped",
        timestamp: "26 Sept 2024 8:00pm",
        by: "Dilip"
    },
    {
        headline: "8 products shipped",
        timestamp: "26 Sept 2024 8:00pm",
        by: "Dilip"
    },
    {
        headline: "8 products shipped",
        timestamp: "26 Sept 2024 8:00pm",
        by: "Dilip"
    },
]



export default function AdminDashboard({ }) {


    return (
        <div className="w-full h-full overflow-x-hidden overflow-y-scroll">
            <div
                className="grid w-full max-h-60vh gap-10"
                style={{
                    gridTemplateColumns: "repeat(2, 1fr) auto",
                    gridTemplateRows: "auto 30vh"
                }}
            >

                <div className="col-start-1 col-end-3 flex gap-5 h-fit ">
                    <div className="w-1/3 h-min min-h-fit flex flex-col text-blue-2-dark p-5 rounded-lg bg-blue-2-dark/30">
                        <TbCoinFilled className="text-[1.8rem]" />
                        <div className="flex gap-3 items-baseline mt-3 text-[3rem] font-bold">
                            3.5Cr
                            <span className="text-sm">Rs</span>
                        </div>
                        <p className="text-lg font-semibold -mt-2">Total Sales</p>
                        <p className="mt-8 text-xs flex gap-3 ">
                            <FaArrowTrendUp className="text-green-500 text-[1.3rem]" /> 7% more than previous week
                        </p>
                    </div>

                    <div className="w-1/3 h-min min-h-fit flex flex-col text-blue-4 p-5 rounded-lg bg-blue-4/30">
                        <BsPersonFill className="text-[1.8rem]" />
                        <div className="flex gap-3 items-baseline mt-3 text-[3rem] font-bold">
                            20,000
                            <span className="text-sm"></span>
                        </div>
                        <p className="text-lg font-semibold -mt-2">Total Users</p>
                        <p className="mt-8 text-xs flex gap-3 ">
                            <FaArrowTrendUp className="text-green-500 text-[1.3rem]" /> 10% more than previous week
                        </p>
                    </div>

                    <div className="w-1/3 h-min min-h-fit flex flex-col text-pink p-5 rounded-lg bg-pink/30">
                        <TbCoinFilled className="text-[1.8rem]" />
                        <div className="flex gap-3 items-baseline mt-3 text-[3rem] font-bold">
                            3.5Cr
                            <span className="text-sm">Rs</span>
                        </div>
                        <p className="text-lg font-semibold -mt-2">Total Sales</p>
                        <p className="mt-8 text-xs flex gap-3 ">
                            <FaArrowTrendUp className="text-green-500 text-[1.3rem]" /> 7% more than previous week
                        </p>
                    </div>
                </div>


                <div className="w-[30vw] col-start-3 row-start-1 row-end-3 flex flex-col max-h-[60vh]">
                    <div className="flex gap-5 min-h-max items-center">

                        <h3 className="text-blue-2 dark:text-blue-2-dark font-bold text-xl">Notifications</h3>
                        <div className="bg-blue-2/30 dark:bg-blue-2-dark/30 h-[2rem] aspect-square rounded-full relative">
                            <div className="absolute bg-red-600 w-[10px] aspect-square rounded-full right-0" />
                            <FaBell className="absolute text-blue-2 dark:text-blue-2-dark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <ul className="flex flex-col mt-5 gap-4 overflow-y-scroll">
                        {
                            notifications.map((item, key) => {
                                return (
                                    <NotificationTile item={item} key={key} />
                                )
                            })
                        }
                    </ul>
                </div>

                <Stack direction="row" className="justify-self-stretch" >
                    <div className="flex">

                        <RadialChart />
                        <DonughtChart />
                    </div>
                </Stack>
            </div>

            <LineChartWrapper />


        </div>
    )
}




const LineChartWrapper = () => {

    const [categoryFilter, setCategoryFilter] = useState<string[]>(['fabricItems', 'furniture', 'lighting', 'total'])
    
    return (
        <div className="w-[100%] mt-20 flex gap-7">
            <CategoryDistribution categoryFilter={categoryFilter} />

            {/* WIP: Wire up select legend  */}
            <div className="w-fit rounded-lg flex p-3" >
                <CheckboxLegend categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
            </div>
        </div>
    )

}