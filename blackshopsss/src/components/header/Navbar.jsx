import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <header className="bg-gray-200 h-[200px] w-[100%] "> aaa
                <div className="">
                    <div className="relative top-[70px] my-auto">
                        <div className="navlink bg-gray-50 h-[50px] pt-[4px]">
                            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                                {
                                    MobileMenu ?
                                        <i className="fas fa-times close home-bth"></i> :
                                        <i className="fa fa-bars open"></i>
                                }
                            </button>
                            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize  "} onClick={() => setMobileMenu()}>
                                <span>
                                    <li className="inline">
                                        <Link to='/'>home</Link>
                                    </li>
                                    <li className="inline">
                                        <Link to='/shop'>Shop</Link>
                                    </li>
                                    <li className="inline">
                                        <Link to='/contact'>contact</Link>
                                    </li>
                                </span>
                            </ul>
                        </div>



                    </div>

                </div>
            </header>
        </>
    );
}

export default Navbar;