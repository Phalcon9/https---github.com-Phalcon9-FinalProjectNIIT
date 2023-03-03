import axios from "axios";
import { createContext, useState } from "react";
import { useContext, useEffect} from "react";

const CartContext = createContext() 
const url = "http://localhost:4000/api/products"
 export function CartProvider({children}){
    const [items, setItems] = useState([]);
    
    const [products, setProducts] = useState(null)

    useEffect(() => {
      const fetchProducts = async () => {
         
         axios.get('http://localhost:4000/api/products/')
         .then(res =>{
              setProducts(res.data)
         }).catch(err => {
              console.log(err);
         })
      }

      fetchProducts()

  }, [])

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

    return(
        <CartContext.Provider value={{items, addToCart, decreaseQty, products}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
    
