import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./style.css"

const Cart = () => {
    const {items, addToCart, decreaseQty } = useContext(CartContext)
    const totalPrice = items.reduce((price, item) => price + item.qty * item.price, 0)
   
    return ( 
        <>
                <section className="cart-items">
                    <div className="container d_flex">
                        <div className="cart-details">
                            {items.length === 0 && <h1 className="no-items product">No Items are in cart</h1>}
                            {items.map((item) => {
                                const productQty = item.price * item.qty
                                return (
                                    <div className="cart-list product d_flex">
                                        <div className="img">
                                            <img src={item.cover}/>
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <h4>
                                                {item.price}.00 * {item.qty} <br />
                                                <span>${productQty}.00</span>
                                            </h4>
                                        </div>
                                        <div className="cart-items-function">
                                            <div className="removeCart">
                                                <button>
                                                    <i className="fa-sharp fa-solid fa-xmark">X</i>   
                                                 </button>
                                            </div>
                                            <div className="cartControl d_flex">
                                                <button className="incCart" onClick={() => addToCart(item)}>
                                                    <i className=" fa fa-plus"></i>
                                                </button>
                                                <button className="desCart" onClick={() => decreaseQty(item)}>
                                                    <i className=" fa fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-price">

                                        </div>
                                    </div>

                                )
                            } )}
                            <div className="cart-total product po">
                                <h2>Cart Summary</h2>
                                <div className="d_flex">
                                    <h4>Total price: </h4>
                                    <h3>${totalPrice}.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
     );
}
 
export default Cart;