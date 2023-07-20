import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


const Navbar = () => {
    const items = useSelector(state => state.cart)
    const [MobileMenu, setMobileMenu] = useState(false)
    const totalItems = items.reduce((count,item)=> count+ item.qty, 0 )

    return (
        <>
            <header className="bg-gray-200 w-[100%]  mb-[20px] relative ">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + "images/flash/logo.png"} className="h-[20px] w-[60px]  absolute inset-0 top-4 left-[40px]  z-40 " alt="" />
                </Link>

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
                                        <Link to='/products'>New & Featured</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/products'>Men</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/products'>Women</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/products'>Kids</Link>
                                    </li>
                                    <li className="inline px-[20px]">
                                        <Link to='/cart'>Cart {totalItems}</Link>
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