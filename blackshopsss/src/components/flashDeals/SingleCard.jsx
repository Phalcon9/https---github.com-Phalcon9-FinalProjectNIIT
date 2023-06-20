import { useContext } from "react";
import CartContext from "../../context/CartContext";

const SingleCard = () => {
    const {singles, addToCart} = useContext(CartContext);

    return ( <>
    <div className="cart-details">
                            {singles.length === 0 && <h1 className="no-items product">No Items are in cart</h1>}
                            {singles.map((item) => {
                              
                                return (
                                    <div className="cart-list product d_flex" key={item.id}>
                                        <div className="img">
                                            {/* <img src={item.cover}/> */}
                                            <img src={`http://localhost:4000/${item.cover}`} alt="" />
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                        
                                        </div>
                                        <div className="cart-items-function">
                                            
                                          
                                            {/* <div className="cartControl d_flex">
                                                <button className="incCart" onClick={() => addToCart(item)}>
                                                    <i className=" fa fa-plus"></i>
                                                </button>
                                                <button className="desCart" onClick={() => decreaseQty(item)}>
                                                    <i className=" fa fa-minus"></i>
                                                </button>
                                            </div> */}
                                        </div>
                                        <div className="cart-item-price">

                                        </div>
                                    </div>

                                )
                            } )}
                           
                            <button></button>
                        </div>
    </> );
}
 
export default SingleCard;