
import { useEffect, useState } from "react";
import FlashCard from "../components/flashDeals/FlashCard";
import SideNav from "../components/sideNav/SideNav";
import "./Home.css"
import axios from "axios";

const Home = () => {
 
  const [selectedGenders, setSelectedGenders] = useState('');
  const [selectedCategories, setSelectedCategories] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    handleFilterProducts(selectedGenders, selectedCategories);
  }, [selectedGenders, selectedCategories]);

  const handleFilterProducts = ( selectedGenders ,selectedCategories) => {
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

      handleFilterProducts( selectedCategories,updatedSelectedGenders);
      return updatedSelectedGenders;
    });
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategories([categoryId]);

    setSelectedCategories((prevSelectedCategories) => {
      const isSelected = prevSelectedCategories.includes(categoryId);

      if (isSelected) {
        return prevSelectedCategories;
      }
  
      const updatedSelectedCategories = [...prevSelectedCategories, categoryId];

      handleFilterProducts([categoryId], selectedGenders)
      return updatedSelectedCategories;
    });
  };

  return (
    <>
      <section className="flex gap-6">
        <SideNav className=""
          onFilter={handleFilterProducts}
          handleGenderChange={handleGenderChange}
          selectedGenders={selectedGenders}
          selectedCategories={selectedCategories}
          handleCategoryClick={handleCategoryClick}
        />
        <FlashCard products={filteredProducts}
        />
      </section>
    </>
  );
}

export default Home; 