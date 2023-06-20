import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const FlashCard = ({ products }) => {

    const { singleItem } = useContext(CartContext)
    return (
        <>
            <section className="w-[80vw] grow   mx-[55px] grid  justify-self-stretch grid-cols-30   gap-[1rem]">

                {products && products.map((product) => (
                    <Link to='/single'>
                        <div className="w-[100%] h-[100%] justify-self-auto" key={product._id}  >
                            <div className="" >
                                <div className="bg-[#f6f6f6]  ">
                                    <img className="object-contain h-[361px] block mx-auto w-[361px]" onClick={() => singleItem(product)} src={`http://localhost:4000/${product.cover}`} alt="" />
                                </div>
                                <div className="ml-[10px]">
                                    <h6>{product.name}</h6>
                                    <h6>${product.price}</h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </section>

        </>
    );
}

export default FlashCard;