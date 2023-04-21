import { useContext } from "react";
import Slider from "react-slick";
import CartContext from "../../context/CartContext";
// import Data from "../Data";

const NextArrow = (props) => {

    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}

// const url = "http://localhost:4000/api/products/"
const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

const FlashCard = () => {
    // const { productItems } = Data;

    const {  products } = useContext(CartContext)




    return (
        <>


            <section className="w-screen h-[50%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-self-stretch max-sm:grid-cols-2 max-md:grid-cols-2 sm:grid-cols-2 gap-x-[5px] gap-y-[5px] ">
                {products && products.map((product) => (

                    <div className="w-[100%] justify-self-auto" key={product._id}>
                        <div className="">
                            <div className="bg-[#f6f6f6]">
                                <img className="object-contain h-[300px] block mx-auto w-[70%]"  src={`http://localhost:4000/${product.cover}`} alt="" />
                            </div>
                            <div className="ml-[10px]">
                                <h6>{product.name}</h6>
                                <h6>{product.subCategory}</h6>
                                <h6>${product.price}</h6>
                            </div>
                            {/* <span className="">{product.discount}% Off</span> */}
                            {/* <div className="">
                            <h3>{product.name}</h3>
                            <div className="">
                                {
                                    product.category &&(
                                        <div>{product.category.productCategory}</div>
                                    )
                                }
                                <button className=""
                                    onClick={() => addToCart(product)}
                                >      
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div> */}
                        </div>
                    </div>
                ))
                }

            </section>

        </>
    );
}

export default FlashCard;