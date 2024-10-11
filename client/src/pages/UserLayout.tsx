
import { NavLink, Outlet } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { PiFlowArrowFill } from "react-icons/pi";
import { FaInbox } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MutableRefObject, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { toggle } from '../features/themeSlice';
import { RootState } from "../app/store"
import { hideLoginForm } from '../features/loginFormDisplaySlice';
// import { IoMdArrowDropright } from "react-icons/io";



let links = [
    {
        icon: <MdSpaceDashboard className='text-[1.1rem]' />,
        link: ":userId/",
        text: "Dashboard"
    },
    {
        icon: <FaUserAlt className='text-[1.1rem]' />,
        link: ":userId/profiles",
        text: "Manage Profiles"
    },
    {
        icon: <FaClipboardList className='text-[1.1rem]' />,
        link: ":userId/orders",
        text: "All Orders"
    },
    {
        icon: <PiFlowArrowFill className='text-[1.1rem]' />,
        link: ":userId/pipeline/:orderId",
        text: "Pipeline"
    },
    {
        icon: <FaInbox className='text-[1.1rem]' />,
        link: ":userId/order/:orderId",
        text: "Order Management"
    },
    {
        icon: <FaWarehouse className='text-[1.1rem]' />,
        link: ":userId/inventory",
        text: "Inventory"
    },
    {
        // WIP: Make Logout handler (set user state null)
        icon: <IoLogOut className='text-[1.1rem]' />,
        link: "/",
        text: "Logout"
    }
]


export default function UserLayout({ }) {

    const [sidebarOpen, setSidebarOpen] = useState(true)

    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.value)
    const themeBtn = useRef() as MutableRefObject<HTMLButtonElement>;

    useEffect(() => {
        themeBtn.current.style.justifyContent = theme == "light" ? "flex-start" : "flex-end";
    }, [theme])

    const toggleTheme = () => {
        if (theme == "light") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        console.log(document.documentElement.classList)
        dispatch(toggle())
    }

    

    return (
        <div className="flex w-screen h-screen bg-white text-blue-3 dark:text-blue-3-dark dark:bg-white-dark" >

            {
                <div
                    className={`bg-blue-1 dark:bg-blue-1-dark absolute h-screen overflow-y-hidden z-10 shadow-2xl sidebar p-10 pt-8  ${sidebarOpen ? "w-fit" : "w-5 p-0 bg-transparent opacity-0"}`}
                    onMouseEnter={() => setSidebarOpen(true)}
                >


                    {true &&
                        <>
                            <div className='w-full h-5 mb-10 flex text-[1.2rem] flex-row-reverse'>
                                <button onClick={() => setSidebarOpen(false)}>
                                    <IoClose />
                                </button>
                            </div>


                            <div className='flex gap-4 items-center'>
                                <div className='rounded-full aspect-square bg-blue-2 dark:bg-blue-2-dark w-14 flex items-center justify-center text-white dark:text-white-dark text-[1.5rem]'> V </div>
                                <div>
                                    <p className='text-xs text-blue-2 font-semibold dark:text-blue-2-dark'>Welcome</p>
                                    <span className='text-lg font-light mt-2 mr-7'>Vansh2308</span>
                                </div>
                            </div>

                            <nav className='flex flex-col gap-6 mt-16'>

                                {
                                    links.map((item, key) => {
                                        return (
                                            <SidebarLink item={item} key={key} />
                                        )
                                    })
                                }
                            </nav>

                            <button className='absolute rounded-full w-20 h-9 p-[0.3rem] bg-blue-2 dark:bg-blue-2-dark flex bottom-10 ' ref={themeBtn} onClick={toggleTheme}>
                                <div className='rounded-full aspect-square h-full bg-white dark:bg-white-dark' />
                            </button>
                        </>
                    }

                </div>

            }

            <div className='flex-1 p-12 pt-8 '>
                <Outlet />
            </div>
        </div>
    )
}




const SidebarLink = ({ item }: {
    item: {
        icon: any
        link: string,
        text: string
    }, key: number
}) => {

    const dispatch = useDispatch()

    return (
        <NavLink
            to={item.link}
            className={({ isActive }) => isActive ? "text-blue-2 dark:text-blue-2-dark font-bold" : ""}
            onClick={() => {
                { item.text == "Logout" && dispatch(hideLoginForm()) }
            }}
        >
            <div className={`flex items-center gap-5 text-xs hover:font-medium ${item.text == "Logout" ? "text-pink mt-10" : ""}`}>
                {item.icon}
                {item.text}
            </div>
        </NavLink>
    )
}