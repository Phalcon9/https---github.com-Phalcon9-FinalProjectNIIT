import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLockPasswordFill, RiSettings4Line } from "react-icons/ri";

import { FiHelpCircle, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
const SideNav = () => {

    const menus = [
        { name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
        { name: 'Customers', link: '/', icon: MdOutlineDashboard },
        { name: 'Orders', link: '/', icon: FiMessageSquare },
        { name: 'Analytics', link: '/', icon: FiHelpCircle },
        { name: 'Messages', link: '/', icon: RiSettings4Line },
        { name: 'Products', link: '/AddProduct', icon: RiLockPasswordFill },
        { name: 'Settings', link: '/', icon: MdOutlineDashboard },
    ]

    return (<>
        <section className="flex gap-6 ">

            <div className="bg-[#2B3467] min-h-screen w-[250px] text-gray-400 pl-2">
                <span className="py-3 flex justify-end">
                    <HiMenuAlt3 />
                    {/* <IoHomeOutline size={26} className="cursor-pointer" /> */}
                </span>
                <div className="mt-4 flex flex-col gap-4 relative left-1 ">
                    {
                        menus.map((menu, index) => {
                            return (
                                
                                <Link to={menu.link} key={index} className=" flex items-center pl-[20px] hover:bg-white  h-[60px] rounded-l-full rouded-r-[-120px]">
                                    <span className="inline-block mr-10  ">{React.createElement(menu.icon, {size:'20'}) }</span>
                                    <span className="inline-block">{menu.name}</span>
                                </Link>
                            )
                        })

                    }
                </div>

            </div>
        </section>
    </>);
}

export default SideNav;