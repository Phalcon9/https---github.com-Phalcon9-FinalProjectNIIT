import axios from "axios";
import { useEffect, useState } from "react";

const SideNav = ({ handleCategoryChange, handleGenderChange, onFilter, selectedCategories, selectedGenders, handleCategoryClick }) => {
    const [genders, setGender] = useState([])
    const [categories, setCategory] = useState([])
    const [MobileMenu, setMobileMenu] = useState(false)

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
        <div className="relative">
            <button className=" absolute right-[500px] top-0  bg-orange-700 " onClick={() => setMobileMenu(!MobileMenu)}>
                {
                    MobileMenu ?
                        <i className="fas fa-times close home-bth"></i> :
                        <i className="fa fa-bars open"></i>
                }
            </button>
        </div>
        <div className=" side flex-none basis-1/5 pl-[30px] mt-[30px]   overflow-y-auto h-[100vh]" onLoad={handleFilter}>


            <div className={MobileMenu ? "nav-links-MobileMenu" : " f_flex capitalize  "} onClick={() => setMobileMenu()}>
                <hr className="w-[90%] bg-black my-[20px]" />
                <div className="">
                    {
                        categories && categories.map(category => (
                            <div key={category._id} className="my-[5px]">
                                <button
                                    key={category._id}
                                    onClick={() => handleCategoryClick(category._id)}
                                    className={`category-button ${selectedCategories.includes(category._id) ? 'selected underline underline-offset-1' : ''}`}
                                >
                                    {category.innerCategory}
                                </button>
                            </div>
                        ))
                    }
                </div>
                <hr className="w-[90%] bg-black my-[20px]" />
                <div>
                    {
                        genders && genders.map(gender => (
                            <label className="block my-[5px]" key={gender._id}>
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