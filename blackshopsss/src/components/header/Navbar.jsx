import { useState } from "react";
import { Link } from "react-router-dom"


const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <header className="bg-gray-200 w-[100%] mb-[20px] relative ">
                <img src={process.env.PUBLIC_URL + "images/flash/logo.png"} className="h-[20px] w-[60px]  absolute inset-0 top-4 left-[40px]  z-40 " alt="" />

                <div className="">

                    <div className="relative ">

                        <div className="navlink bg-white py-3   ">
                            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                                {
                                    MobileMenu ?
                                        <i className="fas fa-times close home-bth"></i> :
                                        <i className="fa fa-bars open"></i>
                                }
                            </button>
                            <div className=" text-center relative">
                                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize  "} onClick={() => setMobileMenu()}>


                                    <li className="inline px-[20px]">
                                        <Link to='/'>New & Featured</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/shop'>Men</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/contact'>Women</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/contact'>Kids</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/cart'>Cart</Link>
                                    </li>
                                    <li className="inline">
                                        <input type="text" className="rounded-full bg-slate-200" />
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="text-center h-10 py-2">
                            <span>Shop all new Arrivals</span>
                            
                        </div>


                    </div>

                </div>
            </header>
        </>
    );
}

export default Navbar;