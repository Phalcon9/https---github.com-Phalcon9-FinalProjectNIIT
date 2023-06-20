import axios from "axios";
import { useContext, useEffect, useState } from "react";

const SideNav = ({ handleCategoryChange, handleGenderChange, onFilter, selectedCategories, selectedGenders, handleCategoryClick }) => {
    const [genders, setGender] = useState([])
    const [categories, setCategory] = useState([])
    const [MobileMenu, setMobileMenu] = useState(false)
    const [hideNav, setHideNav] = useState(false)
    
    // const {} = useContext();

    useEffect(() => {
        const getCategory = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/subCategory')
                setCategory(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        const getGender = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/gender/')
                setGender(response.data)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategory()
        getGender()

    }, [])

    const handleFilter = () => {
        onFilter(categories, genders);
    };

    return (<>
        <div className="absolute  top-[90px] right-[10px]">
            <button className="absolute left-[500px] top-[-10px]  toggle " onClick={() => setMobileMenu(!MobileMenu)}>
                {MobileMenu ? <i className="fas fa-times close home-bth"></i> : <i className="fa fa-bars open"></i>}
            </button>
            {/* <button onClick={()=> setHideNav(!hideNav)}> 
                {hideNav ? <span>show</span>: <span>hide</span>}
            </button> */}
        </div>
        <div className={MobileMenu ? "absolute right-0 top-[115px] h-[100%] w-[30%] bg-red-500 shadow-lg " : hideNav ? 'hidden':" f_flex capitalize side flex-none basis-[15%] tracking-tight pl-[30px] mt-[30px] overflow-y-auto h-[100vh]" } onLoad={handleFilter}>


            <div >
                <hr className="w-[90%] bg-black my-[20px] mx-auto" />
                <div className="font-normal">
                
                    {
                        categories && categories.map(category => (
                            <span key={category._id} className="my-auto text-center block">
                                <button
                                    key={category._id}
                                    onClick={() => handleCategoryClick(category._id)}
                                    className={`category-button tracking-tight ${selectedCategories.includes(category._id) ? 'selected underline underline-offset-1' : ''}`}
                                >
                                    {category.innerCategory}
                                </button>
                            </span>
                        ))
                    }
                </div>
                <hr className="w-[90%] bg-black my-[20px] mx-auto" />
                <div>
                    {
                        genders && genders.map(gender => (
                            <label className="block my-[5px] text-center" key={gender._id}>
                                <input type="checkbox" value={gender._id} onChange={handleGenderChange} checked={selectedGenders.includes(gender._id)} />
                                {gender.gender}
                            </label>
                        ))
                    }
                </div>
            </div>

        </div>
    </>);
}

export default SideNav;