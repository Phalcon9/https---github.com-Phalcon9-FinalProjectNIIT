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

const url = "http://localhost:4000/api/products/"
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

    const { addToCart,  products } = useContext(CartContext)



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
           
            <Slider {...settings}>


                {products && products.map((product) => (
                    
                    <div className="box" key={product._id}>
                        {/* {console.log(product)} */}
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">{product.discount}% Off</span>
                                <img src={`http://localhost:4000/${product.cover}`} alt="" />
                            </div>
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <div className="price">
                                    {/* <h4>{product.price}.00</h4> */}
                                    {
                                        product.category &&(
                                            <div>{product.category.productCategory}</div>
                                        )
                                    }
                                    {/* <h4>{product.category}</h4> */}
                                    {/* {console.log(product.category)} */}
                                    
                                    {/* console.log(product.category.productCategory); */}
                                    <button className="btn"
                                        onClick={() => addToCart(product)}
                                    >      
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider>
        </>
    );
}

export default FlashCard;