import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'


const Categories = () => {
  //getting categories
  const [categories, setCategories] = useState([])
  const [isClicked, setIsClicked] = useState('')
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/category/')
        setCategories(response.data)
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories()
  }, [])

  const fetchProductsForCategory = async (id) => {
    // const existingProducts = products.find((P) => P.category === id)
    // if (existingProducts) {
    //   setProducts(existingProducts.products)
    //   return
    // }
    try {
      const response = await axios.get(`http://localhost:4000/api/category/${id}/products`)
      setProducts([...products, { category: id, products: response.data }])
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategoryHover = (id) => {
    fetchProductsForCategory(id);
  };

  const handleCategoryLeave = () => {
    setProducts([products.length = 0]);
  };


  return (<>
    <div className="category" >
      {
        categories && categories.map((category) => {
          console.log(category);
          return (
            <Link to={category}  key={category._id}>
            <div className="box f_flex" onMouseEnter={() => handleCategoryHover(category._id)}
              onMouseLeave={handleCategoryLeave}  >
            
                <img src={`http://localhost:4000/${category.icon}`} alt="" />
                {/* <img src={category.icon} alt="" /> */}
                <span>{category.productCategory}</span>
              

              {/* <p>{category.product._id}</p> */}

              {/* {products.filter((p) => p.category === category._id).map((p) =>
                  p.products.map((product) => (
                    <div key={product._id}>
                      
                      <h4>{product.name}</h4>
                      <p>{product.discount}</p>
                    </div>
                  ))

                )} */}
            </div>
            </Link>
          )
        }
        )
      }

    </div>

  </>);
}

export default Categories;