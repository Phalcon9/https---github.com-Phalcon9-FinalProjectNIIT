import { useState } from "react";
import { Link } from "react-router-dom"

const MenNav = () => {
    return ( <>
   
        <header className="bg-gray-200   ">
                <div className="">
                    <div className="relative  my-auto">
                        <div className="navlink bg-gray-50 h-[50px] pt-[4px]">
                                <nav className="">
                                        <Link className="" to='/'>Shoes</Link>
                                        <Link className="" to='/shop'>Clothing</Link>
                                        <Link className="" to='/contact'>Accessories</Link>
                                </nav>
                        </div>
                    </div>
                </div>
            </header>
    </> );
}
 
export default MenNav;