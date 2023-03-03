import { useContext } from "react";
import Data from "../../components/Data";
import CartContext from "../../context/CartContext";
import "./style.css"
const Shopping = () => {

    const { productItems } = Data
    const { addToCart } = useContext(CartContext)
    return (
        <>
            {
                productItems.map((productItems) => {
                    return (
                        <div className="box-container box" key={productItems.id}>
                            <div className="product mtop box-item">
                                <div className="img">
                                    <span className="discount">{productItems.discount}% Off</span>
                                    <img src={productItems.cover} alt="" />
                                </div>
                                <div className="product-details">
                                    <h3>{productItems.name}</h3>
                                    <div className="price">
                                        <h4>{productItems.price}.00</h4>
                                        <button className="btn"
                                            onClick={() => addToCart(productItems)}
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