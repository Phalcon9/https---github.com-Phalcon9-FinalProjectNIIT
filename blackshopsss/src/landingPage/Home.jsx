
import { useEffect, useState } from "react";
import FlashCard from "../components/flashDeals/FlashCard";
import SideNav from "../components/sideNav/SideNav";
import "./Home.css"
import axios from "axios";

const Home = () => {
  // const [products, setProducts] = useState([])
  // const [genders, setGender] = useState([])
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState('');
  const [selectedCategories, setSelectedCategories] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  // const [selectedGender, setSelectedGender] = useState([])

  // const handleGenderChange = (selectedGender) => {
  //   setSelectedGender(selectedGender)
  // }


  // const fetchProductsByGender = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:4000/api/gender/${id}/productGender`)
  //     return response.data
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }



  useEffect(() => {
    handleFilterProducts();
  }, []);
 
  const handleFilterProducts = (selectedGenders) => {
    // Make a GET request to the backend API to fetch filtered products
    axios.get('http://localhost:4000/api/products/productGender/'
    , {
      params: {
        gender: selectedGenders,
        subCategory: selectedCategories,
      },
    }
    )
      .then((response) => {
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGenderChange = (event) => {
    const genderId = event.target.value;
    const isChecked = event.target.checked;
  
    setSelectedGenders((prevSelectedGenders) => {
      let updatedSelectedGenders;
  
      if (isChecked) {
        updatedSelectedGenders = [...prevSelectedGenders, genderId];
      } else {
        updatedSelectedGenders = prevSelectedGenders.filter((id) => id !== genderId);
      }
  
      handleFilterProducts(updatedSelectedGenders);
      return updatedSelectedGenders;
    });
  };

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    }

    handleFilterProducts();
  };

 
  return (
    <>
      <section className="flex flex-row">
        <SideNav className="basis-4"
          onFilter={handleFilterProducts}
          handleGenderChange={handleGenderChange}
          handleCategoryChange={handleCategoryChange}
          selectedGenders={selectedGenders}
          selectedCategories= {selectedCategories}
        />
        <FlashCard products={filteredProducts}
        />
      </section>
    </>
  );
}

export default Home; 