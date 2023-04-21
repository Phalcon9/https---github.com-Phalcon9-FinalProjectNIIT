import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const Categories = () => {
  const [categories, setCategories] = useState([])
  const [subCategory, setSubCategory] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/category/')
        setCategories(response.data)
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories()
  }, [])

  const fetchSubCategoryForCategory = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/category/${id}/subCategory`)
      setSubCategory([...subCategory, { innerCategory: id, subCategory: response.data }])
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategoryClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/${id}/products`)
      setProducts(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const handleCategoryHover = (id) => {
    fetchSubCategoryForCategory(id);
  };

  const handleCategoryLeave = () => {
    setSubCategory([]);
  };


  return (<>
    <div className="category" >
      {
        categories && categories.map((category) => {
          return (
            <Link to={category} key={category._id}>
              <div className="box f_flex" onMouseEnter={() => handleCategoryHover(category._id)} onMouseLeave={handleCategoryLeave} onClick={handleCategoryClick(category._id)}  >
                <img src={`http://localhost:4000/${category.icon}`} alt="" />
                <span>{category.productCategory}</span>
                {
                  subCategory.filter((p) => p.innerCategory === category._id).map((p) =>
                    p.subCategory.map((subCate) => (
                      <div key={subCate._id}>
                        <h4>{subCate.innerCategory}</h4>
                      </div>
                    )
                    )
                  )
                }
              </div>
            </Link>
          )
        }
        )
      }
      <div>
        {
          products && products.map((product) => {
            return (
              <div>
                <div className="product mtop" key={product._id}>
                  <div className="img">
                    <span className="discount">{product.discount}% Off</span>
                    <img src={`http://localhost:4000/${product.cover}`} alt="" />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <div className="price">
                      <span>{product.price}</span>
                    </div>
                    <button className="btn">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </>);
}

export default Categories;