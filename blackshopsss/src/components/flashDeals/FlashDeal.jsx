// import { useContext } from "react";
// import CartContext from "../../context/CartContext";

import FlashCard from "./FlashCard";

const FlashDeals = () => {
    // const {addToCart}= useContext(CartContext)
    
    return ( 
        
        <>
            <section className="flash background">
                <div className="container ">
                    <div className="heading f_flex">
                    <i className="fa fa-bolt"></i>
                    <h1>Flash Deals</h1>
                    </div>
                   <FlashCard 
                //    addToCart={addToCart}  
                   />
                </div>
            </section>
        </>
     );
}
 
export default FlashDeals;