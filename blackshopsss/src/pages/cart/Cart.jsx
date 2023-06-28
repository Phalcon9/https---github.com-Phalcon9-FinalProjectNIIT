import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {items, addToCart, decreaseQty } = useContext(CartContext)
    const totalPrice = items.reduce((price, item) => price + item.qty * item.price, 0)
   
    return ( 
        <>
                <section className="w-[75%] mx-auto" >
                  
                        <div className="flex flex-row  tablet:max-desktop:flex-col gap-x-[40px]">
                            <div className="basis-[60%]">
                            {items.length === 0 && <h1 className="">No Items are in cart</h1>}
                            {items.map((item) => {
                                const productQty = item.price * item.qty
                                return (
                                    <div className="relative h-[200px] " key={item.id}>
                                        <div className="absolute ">
                                            {/* <img src={item.cover}/> */}
                                            <img src={`http://localhost:4000/${item.cover}`} className="h-[120px]" alt="" />
                                        </div>
                                        <div className="">
                                        <h3>{item.name}</h3>
                                        </div>
                                        <div className="absolute left-[150px]">
                                            
                                            {/* <h4>{item.subCategory}</h4> */}
                                            <h4>
                                                {item.price}.00 * {item.qty} <br />
                                                <span>${productQty}.00</span>
                                                <button className="incCart" onClick={() => addToCart(item)}>
                                                    <i className=" fa fa-plus"></i>
                                                </button>
                                                <button className="desCart" onClick={() => decreaseQty(item)}>
                                                    <i className=" fa fa-minus"></i>
                                                </button>
                                            </h4>
                                        </div>
                                    </div>

                                )
                            } )}
                            </div>
                           
                            <div className="basis-[40%]  ">
                                <h2>Cart Summary</h2>
                                <div className="d_flex">
                                    <h4>Total price: </h4>
                                    <h3>${totalPrice}.00</h3>
                                </div>
                                <Link to="/checkout"><button className="w-[100%] block bg-black text-white rounded-full my-2 h-[50px]" >Checkout</button></Link>
                                
                       
                            </div>
                        </div>
                    
                </section>
        </>
     );
}
 
export default Cart;