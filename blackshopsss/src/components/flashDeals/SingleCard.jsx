import { useContext } from "react";
import CartContext from "../../context/CartContext";

const SingleCard = () => {
    const { singles, addToCart } = useContext(CartContext);

    return (<>
        <div className="cart-details">
            {singles.length === 0 && <h1 className="no-items product">No Items are in cart</h1>}
            {singles.map((item) => {
                return (
                    <div className="flex flex-row  gap-x-[60px] tablet:max-desktop:flex-col w-[80%] mx-auto " key={item.id}>
                        <div className="basis-[60%] ">
                            <img src={`http://localhost:4000/${item.cover}`} alt="" />
                        </div>


                        <div className="basis-[40%] ">
                            <h3 className="font-medium text-[20px]">{item.name}</h3>
                            <h5>${item.price}</h5>
                            
                            <div>
                                <h4>select size</h4>
                                <div className="grid grid-cols-2 gap-1 m-5 ">
                                    <button className="w-[100%]  border-gray-200 border-[1px] rounded-md h-[40px] inline-block">M 6 / W 7.5</button>
                                    <button className="w-[100%]  border-gray-200 border-[1px] rounded-md h-[40px] inline-block">M 6 / W 7.5</button>
                                    <button className="w-[100%]  border-gray-200 border-[1px] rounded-md h-[40px] inline-block">M 6 / W 7.5</button>
                                    <button className="w-[100%]  border-gray-200 border-[1px] rounded-md h-[40px] inline-block">M 6 / W 7.5</button>
                                    <button className="w-[100%]  border-gray-200 border-[1px] rounded-md h-[40px] inline-block">M 6 / W 7.5</button>
                                    <button className="w-[100%]  border-gray-200 border-[1px] rounded-md h-[40px] inline-block">M 6 / W 7.5</button>
                                </div>
                       
                            </div>
                            <h6>4 interest-free payments of $27.50 with Klarna. Learn More</h6>
                            <button className="w-[100%] block bg-black text-white rounded-full my-2 h-[50px]" onClick={()=>addToCart(item)}>Add to Bag</button>
                            <button className="w-[100%] block border-gray-300 border-[1px] rounded-full h-[50px]">Favorite</button>
                       
                        </div>


                    </div>

                )
            })}

            <button></button>
        </div>
    </>);
}

export default SingleCard;