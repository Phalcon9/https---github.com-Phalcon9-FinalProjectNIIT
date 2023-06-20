import { useContext } from "react";
// import Data from "../../components/Data";
import CartContext from "../../context/CartContext";
import "./style.css"
const Shopping = () => {

    const { addToCart, products } = useContext(CartContext)
    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div className="box-container box" key={product.id}>
                            <div className="product mtop box-item">
                                <div className="img">
                                    <span className="discount">{product.discount}% Off</span>
                                    {/* <img src={product.cover} alt="" /> */}
                                    <img className="object-contain h-[361px] block mx-auto w-[361px]" src={`http://localhost:4000/${product.cover}`} alt="" />

                                </div>
                                <div className="product-details">
                                    <h3>{product.name}</h3>
                                    <div className="price">
                                        <h4>{product.price}.00</h4>
                                        <button className="btn"
                                            onClick={() => addToCart(product)}
                                        >
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Shopping;