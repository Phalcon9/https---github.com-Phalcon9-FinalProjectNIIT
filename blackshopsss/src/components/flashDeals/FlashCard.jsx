import { useContext} from "react";
import Slider from "react-slick";
import CartContext from "../../context/CartContext";
import Data from "../Data";

const  NextArrow = (props) => {

    const {onClick} = props 
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const {onClick} = props 
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

const  FlashCard = () => {
    const{productItems} = Data;

    const {addToCart}= useContext(CartContext)

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
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
    return ( 
        <>
        <Slider {...settings}>
        {
            productItems.map((productItems) =>{
                   
           return(
            <div className="box" key={productItems.id}>
                <div className="product mtop">
                    <div className="img">
                        <span className="discount">{productItems.discount}% Off</span>
                        <img src={productItems.cover} alt=""/>
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
            </Slider>
        </>
     );
}
 
export default FlashCard;