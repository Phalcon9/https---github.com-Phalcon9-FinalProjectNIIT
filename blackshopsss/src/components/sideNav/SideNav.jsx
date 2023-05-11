const SideNav = () => {
    return ( <>
        <div className=" w-[20%]  basis-1/4 pl-[30px] mt-[30px] overflow-y-auto h-[500px]">
            <hr className="w-[90%] bg-black"/>
            <ul className=" w-[30%]  text-center space-y-3 text-lg mt-[20px]">
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
                <li className="tracking-tight">Jordan</li>
            </ul>
            <hr className="w-[90%] bg-black"/>
            <ul className="w-[30%]  text-center space-y-3 text-lg mt-[20px]">
                <h4>Gender</h4>
                <li className="tracking-tight">
                    <input className="w-[20px]" type="checkbox" name="gender1" id="" />
                    <label htmlFor="gender1">Male</label>
                </li>
                <li className="tracking-tight">
                    <input type="checkbox" name="gender2" id="" />
                    <label htmlFor="gender2">Female</label>
                </li>
                <li className="tracking-tight">
                    <input type="checkbox" name="unisex" id="" />
                    <label htmlFor="unisex">Unisex</label>
                </li>
            </ul>
        </div>
    </> );
}
 
export default SideNav;