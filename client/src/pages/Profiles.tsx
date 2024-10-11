import ProfileDisplay from "../components/ProfileDisplay"
import { IoSearch } from "react-icons/io5";
import { userType } from "../types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";



const allUsers: userType[] = [
    {
        name: "Vansh Agarwal",
        username: "vansh2308",
        dateJoined: new Date(),
        gender: "male",
        role: "admin",
        email: "agarwal.25@iitj.ac.in",
        contact: "+91 9571924777",
        activities: []
    },
    {
        name: "Dilip Choudhary",
        username: "dilip123",
        dateJoined: new Date(),
        gender: "male",
        role: "manufacturing",
        email: "dilip.25@iitj.ac.in",
        contact: "+91 9571924123",
        activities: []
    },
    {
        name: "Utkarsh SRivastava",
        username: "lala2308",
        dateJoined: new Date(),
        gender: "male",
        role: "supervisor",
        email: "lala.25@iitj.ac.in",
        contact: "+91 9571923237",
        activities: []
    },
    {
        name: "Shilpa Dang",
        username: "shilpa432",
        dateJoined: new Date(),
        gender: "female",
        role: "shipping",
        email: "shilpa.25@iitj.ac.in",
        contact: "+91 95719247122",
        activities: []
    },
    {
        name: "Tanish Pagaria",
        username: "tonish990",
        dateJoined: new Date(),
        gender: "male",
        role: "packaging",
        email: "pagaria.25@iitj.ac.in",
        contact: "+91 9571924233",
        activities: []
    },
    {
        name: "Vishal Baghel",
        username: "vishal892",
        dateJoined: new Date(),
        gender: "male",
        role: "admin",
        email: "baghel.25@iitj.ac.in",
        contact: "+91 9571924777",
        activities: []
    },
]


// WIP: Wire up edit profile feature 
export default function Profiles() {
    const currentUser = useSelector((state: RootState) => state.user.value)
    const [user, setUser] = useState(currentUser)
    const [query, setQuery] = useState("")
    const [userList, setUserList] = useState(allUsers)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value.toLowerCase());
        console.log(query)

        if(query.length == 1){ 
            console.log("here")
            setUserList(allUsers); 
            return;
        }
        setUserList(userList.filter((user) => {
            return(
                user.name.toLowerCase().includes(query) || user.username.includes(query)
            )
        }))
    }
    

    return (
        <div className="w-full h-full overflow-x-hidden overflow-y-scroll flex gap-9 ">
            <ProfileDisplay user={user} />

            <div className="min-w-fit w-[25vw] h-full border-l-[1px] border-l-blue-2  dark:border-l-blue-2-dark pl-7">
                <div className="w-full flex text-white-dark dark:text-white bg-blue-1 dark:bg-blue-1-dark items-center p-3 rounded-md overflow-hidden">
                    <input type="text" placeholder="Search user" className="w-full focus:outline-none text-white-dark dark:text-white bg-blue-1 dark:bg-blue-1-dark" onChange={handleChange} />

                    <button onClick={() => { }}>
                        <IoSearch />
                    </button>
                </div>

                <UsersList userList = {userList} setUser={setUser} />
            </div>
        </div>
    )
}






function UsersList({userList, setUser}: {userList: userType[], setUser: React.Dispatch<React.SetStateAction<userType>>}) {
    return (
        <ul role="list" className="divide-y divide-gray-100 mt-7">
            {userList.map((user) => (

                <li key={user.email}
                    className="flex justify-between gap-x-6 py-5 cursor-pointer"
                    onClick={() => { setUser(user) }}
                >

                    <div className="flex min-w-0 gap-x-4">
          
                        <div className="rounded-full aspect-square bg-blue-2 dark:bg-blue-2-dark p-4 flex items-center justify-center h-10 text-sm font-bold text-white dark:text-white-dark">
                            {user.name[0].toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{user.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.username}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-xs leading-6 text-gray-900 dark:text-white">{user.role}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
