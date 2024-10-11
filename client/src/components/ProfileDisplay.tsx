// import { useSelector } from "react-redux"
// import { RootState } from "../app/store"
// import { act, useState } from "react"
import { MdOutlineEdit } from "react-icons/md";
import { userType } from "../types";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


export default function ProfileDisplay({user}: {user: userType}) {
    


    return (
        <div className="h-full flex-1 pl-[18vw] overflow-y-scroll">
            <div className="aspect-square w-24 text-semibold text-[3rem] rounded-full bg-blue-2 flex items-center justify-center text-white dark:text-white-dark dark:bg-blue-2-dark mb-5">
                {user.name[0].toUpperCase()}
            </div>

            <div className="flex justify-between items-end p-3">
                <div className="flex-col gap-3">
                    <h2 className="text-[2rem] font-medium capitalize"> {user.username} </h2>
                    <span className="capitalize text-blue-2 dark:text-blue-2-dark font-semibold text-[1.3rem]"> {user.role} </span>
                </div>

                <button className="flex gap-3 items-center text-pink text-xs cursor-pointer">
                    <MdOutlineEdit className="text-lg" />
                    Edit Profile
                </button>
            </div>

            <div className="p-3 mt-7 w-full">
                <div className="flex justify-between w-full">
                    <span className="font-semibold"> {user.name} </span>
                    <span className="font-light text-xs"> {user.gender} </span>
                </div>

                <p className="mt-7 text-xs font-medium">Contact: {user.contact}</p>
                <p className="mt-3 text-xs font-medium">Email ID: {user.email}</p>
                <p className="mt-3 text-xs font-medium">Joined On {user.dateJoined.toLocaleString()}</p>
            </div>


            <h3 className="font-semibold text-sm mt-14 mb-3 dark:text-blue-2-dark text-blue-2"> User Activity </h3>
            <UserActivity user={user} />

        </div>
    )
}






function UserActivity({ user }: { user: userType }) {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {user.activities?.map((activity, key) => (
                <li key={key} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">

                        <div className="min-w-0 flex-auto">

                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{activity.headline}</p>

                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{activity.timestamp.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <Link to={activity.link}>
                            <MdOutlineKeyboardArrowRight />
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
