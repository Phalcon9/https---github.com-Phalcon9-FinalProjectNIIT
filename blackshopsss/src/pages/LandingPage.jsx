import { Link } from "react-router-dom";
// import firstIMG from './nike-just-do-it-2.jpg';
import secondIMG from './nike-just-do-it-4.jpg';
// import thirdIMG from './nike-just-do-it.jpg'

const LandingPage = () => {

    return (<>
        <div className=" h-[280px] w-screen tablet:max-tab1:h-[300px] bg-hero-pattern scale-15  tablet:max-tab1:bg-small-hero  bg-no-repeat bg-[length:99em_18em] tablet:max-tab1:bg-[length:18em_18em] tablet:max-tab1:min-w-[100px] tablet:max-tab1:mx-auto tablet:max-tab1:w-[100%] " style={{ backgroundPosition: "center" }} >
            <div className="text-white tablet:max-tab1:hidden p-[40px]">
                <p className="font-[700] text-[2.5rem]">20% OFF SELECT STYLES</p>
                <p>Members: Sign in and use code SUMMER. Exclusions apply</p>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-white text-black rounded-full my-2 w-[120px]">Shop</button></Link>
            </div>
        </div>

        <div className="text-black tab1:hidden p-[40px] flex flex-col gap-y-7">
            <p>Members: Sign in and use code SUMMER. Exclusions apply</p>
            <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-black text-white rounded-full my-2 w-[120px]">Shop</button></Link>
        </div>

        <p className=" ml-[30px] mt-[50px] font-[450] text-[1.5rem] font-sans ">Connect with mother nature</p>

        <div className="w-[100%] grid place-content-center gap-5  mt-[30px]">
            <img src={secondIMG} alt="" className="w-screen" />
            <div className="text-center">
                <h1 className="text-[50px] font-extrabold">ADVENTURE ESSENTIALS</h1>
                <p>Styles designed to take on the wildest parts of any trip</p>
            </div>

            <div className="flex justify-center items-center gap-[20px] w-[100%] tablet:max-tab1:flex-col">
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-black text-white rounded-full my-2 w-[120px]">Shop Men</button></Link>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-black text-white rounded-full my-2 w-[155px]">Shop Women</button></Link>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-black text-white rounded-full my-2 w-[120px]">Shop Kids</button></Link>
            </div>
        </div>

        <div className="relative bg-member bg-no-repeat tablet:max-tab1:bg-member-small h-[420px] bg-[length:85em_18em] w-[94%] mx-auto bg-center tablet:max-tab1:bg-[length:35em_30em]  tablet:max-tab1:min-w-[300px]">
            <div className="text-white w-[80%] mx-auto pt-[100px]">
                <p className="font-[800] text-[4.5rem] leading-[3rem] tracking-tightest font-mono" >BECOME A<br/>MEMBER</p>
                <p className="my-[10px]">Sign up for free, Join the community</p>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-white text-black rounded-full my-2 w-[100px]">Join Us</button></Link>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-white text-black rounded-full my-2 w-[100px]">Sign Up</button></Link>
      
            </div>
        </div>
        <div className="grid grid-cols-4 tablet:max-tab1:grid-cols-1 gap-x-[-1px]  place-items-center mt-[100px] mb-10  place-content-start">
            <div className="tablet:max-tab1:text-left   ">
                <h5>Featured</h5>
                <ul className="tablet:max-tab1:hidden  ">
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
            <div>
                <h5>Shoes</h5>
                <ul className="tablet:max-tab1:hidden">
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
            <div>
                <h5>Clothing</h5>
                <ul className="tablet:max-tab1:hidden">
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
            <div>
                <h5>Kids</h5>
                <ul className="tablet:max-tab1:hidden">
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
        </div>

    </>);
}

export default LandingPage;