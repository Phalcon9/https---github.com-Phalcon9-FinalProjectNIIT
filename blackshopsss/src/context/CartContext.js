import { createContext, useState } from "react";

const CartContext = createContext() 

 export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const decreaseQty = (productItems, shopItems) =>{
        setItems((prevState) => [...prevState, {productItems}])
        const productExit = items.find((prevState) => prevState.id === productItems.id)
        if(productExit.qty ===1){
            setItems(items.filter((item) => item.id !== productItems.id))
        }else {
            setItems(items.map((item) =>(item.id === productItems.id? { ...productExit, qty: productExit.qty -1} : item)))
        }
    }
    
    const addToCart= (productItems) => {
         setItems((prevState) => [...prevState, {productItems}])
        const productExit = items.find((prevState) => prevState.id === productItems.id)

        if (productExit){
            setItems(items.map((item) => (item.id === productItems.id ? { ...productExit, qty: productExit.qty +1} : item)))
        }else {
            setItems([...items, { ...productItems, qty: 1 }])
        }
        console.log(items);
    }

    return(
        <CartContext.Provider value={{items, addToCart, decreaseQty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
    
