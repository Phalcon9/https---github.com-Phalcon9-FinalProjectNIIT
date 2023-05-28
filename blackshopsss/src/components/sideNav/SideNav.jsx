import axios from "axios";
import { useEffect, useState } from "react";

const SideNav = ({ handleCategoryChange, handleGenderChange, onFilter, selectedCategories, selectedGenders }) => {
    const [genders, setGender] = useState([])
    const [categories, setCategory] = useState([])
    // const [selectedGenders, setSelectedGenders] = useState([]);
    // const [selectedCategories, setSelectedCategories] = useState([]);
    // const handleGenderChange = (e) => {
    //     onGender(e.target.value)
    // }


    useEffect(() => {
        const getCategory = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/category')
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
        // handleFilter()
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
                        <div>
                            <button value={category._id}>{category.productCategory}</button>
                        </div>
                    ))
                }
            </div>

            <hr className="w-[90%] bg-black" />

            <div>
                {
                    genders && genders.map(gender => (
                        <label className="block">
                            <input type="checkbox" value={gender._id} onChange={handleGenderChange} checked={selectedGenders.includes(gender._id)} />
                            {gender.gender}
                        </label>
                    ))
                }
            </div>
            {/* <button onClick={handleFilter}>Filter</button> */}
        </div>
    </>);
}

export default SideNav;