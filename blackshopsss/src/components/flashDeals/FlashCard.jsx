import { useContext } from "react";
import Slider from "react-slick";
import CartContext from "../../context/CartContext";
// import Data from "../Data";

// const NextArrow = (props) => {

//     const { onClick } = props
//     return (
//         <div className="control-btn" onClick={onClick}>
//             <button className="next">
//                 <i className="fa fa-long-arrow-alt-right"></i>
//             </button>
//         </div>
//     )
// }

// // const url = "http://localhost:4000/api/products/"
// const PrevArrow = (props) => {
//     const { onClick } = props
//     return (
//         <div className="control-btn" onClick={onClick}>
//             <button className="prev">
//                 <i className="fa fa-long-arrow-alt-left"></i>
//             </button>
//         </div>
//     )
// }

const FlashCard = ({products}) => {
  
    return (
        <>


            <section className="w-[80vw]  h-[65%] mx-auto grid  justify-self-stretch grid-cols-30  gap-[1rem]">
                {products && products.map((product) => (
                    <div className="w-[100%] h-[100%] justify-self-auto" key={product._id}>
                        <div className="">
                            <div className="bg-[#f6f6f6] h-[0%]  ">
                                <img className="object-contain h-[400px] block mx-auto w-[300px]"  src={`http://localhost:4000/${product.cover}`} alt="" />
                            </div>
                            <div className="ml-[10px]">
                                <h6>{product.name}</h6>
                             
                                <h6>${product.price}</h6>
                            </div>
                        </div>
                    </div>
                ))
                }

            </section>

        </>
    );
}

export default FlashCard;