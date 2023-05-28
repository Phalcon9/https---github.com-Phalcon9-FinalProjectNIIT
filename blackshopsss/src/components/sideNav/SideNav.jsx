import axios from "axios";
import { useEffect, useState } from "react";

const SideNav = ({ handleCategoryChange, handleGenderChange, onFilter, selectedCategories, selectedGenders, handleCategoryClick }) => {
    const [genders, setGender] = useState([])
    const [categories, setCategory] = useState([])

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
        <div className=" w-[20%]  basis-1/4 pl-[30px] mt-[30px] overflow-y-auto h-[500px]" onLoad={handleFilter}>
            <hr className="w-[90%] bg-black" />

            <div>
                {
                    categories && categories.map(category => (
                        <div key={category._id}>
                            <button
                                key={category._id}
                                onClick={() => handleCategoryClick(category._id)}
                                className={`category-button ${selectedCategories.includes(category._id) ? 'selected underline underline-offset-1' : ''}`}
                            >
                                {category.innerCategory}
                            </button>
                            {/* <button value={category._id} >{category.productCategory}</button> */}
                            {/* <label >
                                <input type="checkbox" value={category._id} onChange={handleCategoryChange} checked={selectedCategories.includes(category._id)} />
                                {category.innerCategory}
                            </label> */}

                        </div>
                    ))
                }
            </div>

            <hr className="w-[90%] bg-black" />

            <div>
                {
                    genders && genders.map(gender => (
                        <label className="block" key={gender._id}>
                            <input type="checkbox" value={gender._id} onChange={handleGenderChange} checked={selectedGenders.includes(gender._id)} />
                            {gender.gender}
                        </label>
                    ))
                }
            </div>
        </div>
    </>);
}

export default SideNav;