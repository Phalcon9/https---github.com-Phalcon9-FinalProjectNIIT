import axios from "axios";
import { createContext, useState, useRef } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const [products, setProducts] = useState([])

    
   
    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/products/');
          setProducts(response.data)
          // console.log('');
          return response.data
         
        } catch (error) {
          console.error(error);
        }
      }
      // const getCategories = async () => {
      //   try {
      //     const response = await axios.get('http://localhost:4000/api/category/')
      //     setCategories(response.data)
      //     console.log(response.data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      
      getProduct()
    }, [])
  

  // const {data} = useQuery('products',  getProduct) 
 
 
  const decreaseQty = (product, shopItems) => {
    const productExist = items.find((item) => item._id === product._id);
    if (productExist) {
      if (productExist.qty === 1) {
        setItems((prevState) => prevState.filter((item) => item._id !== product._id));
      } else {
        setItems((prevState) => prevState.map((item) => (item._id === product._id ? { ...item, qty: item.qty - 1 } : item)));
      }
    } else {
      setItems((prevState) => [...prevState, { ...product }]);
    }
  };

  const addToCart = (product) => {
    const productExist = items.find((item) => item._id === product._id);
    if (productExist) {
      setItems((prevState) => prevState.map((item) => (item._id === product._id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setItems((prevState) => [...prevState, { ...product, qty: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart, decreaseQty, products }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

