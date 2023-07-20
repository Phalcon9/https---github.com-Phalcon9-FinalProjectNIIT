// import { useContext } from "react";
// import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Cart = () => {
    const items = useSelector((state) => state.cart)
    // const {
    //      items, 
    //     addToCart, decreaseQty } = useContext(CartContext)
    const totalPrice = items.reduce((count, item) => count + item.qty * item.price, 0)

    return (
        <>
            <section className="w-[75%] mx-auto" >

                <div className="flex flex-row  tablet:max-desktop:flex-col gap-x-[40px]">
                    <div className="basis-[60%]">
                        {items.length === 0 && <h1 className="">No Items are in cart</h1>}
                        {/* {JSON.stringify(productCart)} */}
                        {items.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className=" h-[200px] grid grid-cols-3" key={item.id}>
                                    <div className="">
                                        <img src={`http://localhost:4000/${item.cover}`} className="h-[120px]" alt="" />
                                    </div>
                                    <div className="">
                                        <h3>{item.name}</h3>
                                        <h3>Quantity {productQty}</h3>

                                    </div>
                                    <div>
                                        <h3>{item.price}</h3>
                                    </div>
                                    <div className="">

                                        {/* <h4>{item.subCategory}</h4> */}
                                        <h4>
                                            {item.price}.00 * {item.qty} <br />
                                            <span> quantity ${productQty}.00</span>
                                            <button className="incCart" 
                                            //onClick={() => addToCart(item)}
                                            >
                                                <i className=" fa fa-plus"></i>
                                            </button>
                                            <button className="desCart" 
                                            //onClick={() => decreaseQty(item)}
                                            >
                                                <i className=" fa fa-minus"></i>
                                            </button>
                                        </h4>
                                    </div>
                                </div>

                            )
                        })}
                    </div>

                    <div className="basis-[40%]  ">
                        <h2>Cart Summary</h2>
                        <div className="d_flex">
                            <h3 className="" style={{ wordSpacing: '200px' }}>SubTotal ${totalPrice}.00</h3>
                            <hr />
                            <p className="my-[15px]">Total ${totalPrice}.00</p>
                            <hr />
                        </div>
                        <Link to="/checkout"><button className="w-[100%] block bg-black text-white rounded-full my-2 h-[50px]" >Checkout</button></Link>


                    </div>
                </div>

            </section>
        </>
    );
}

export default Cart;