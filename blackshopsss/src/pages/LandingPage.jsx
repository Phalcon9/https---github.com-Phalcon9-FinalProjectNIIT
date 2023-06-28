import { Link } from "react-router-dom";
import firstIMG from './nike-just-do-it-2.jpg';
import secondIMG from './nike-just-do-it-4.jpg';

const LandingPage = () => {
    return (<>
        <div>
            <img src={firstIMG} alt="" />
        </div>
        <p className="my-[40px] ml-[40px]">Connect with mother nature</p>
        <div className="w-[100%] grid place-content-center gap-5 ">
            <img src={secondIMG} alt="" />
            <div className="text-center">
                <h1 className="text-[50px] font-extrabold">ADVENTURE ESSENTIALS</h1>
                <p>Styles designed to take on the wildest parts of any trip</p>
            </div>
            <div className="flex place-content-center gap-2">
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-black text-white rounded-full my-2">Shop Men</button></Link>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center  bg-black text-white rounded-full my-2 ">Shop Women</button></Link>
                <Link to="/products"> <button className="px-[20px] py-[5px] text-center   bg-black text-white rounded-full my-2 ">Shop Kids</button></Link>
            </div>
        </div>
        <div className="grid grid-cols-4 w-[80%] mx-auto  place-items-center mt-[100px] mb-10">
            <div>
                <h5>Featured</h5>
                <ul>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
            <div>
                <h5>Shoes</h5>
                <ul>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
            <div>
                <h5>Clothing</h5>
                <ul className="">
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                    <li>Air Force 1</li>
                </ul>
            </div>
            <div>
                <h5>Kids</h5>
                <ul>
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