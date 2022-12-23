import Slider from "react-slick";
import Sdata from "./Sdata";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const ShopCart = () => {
    const{shopItems} = Sdata;
    
    const {addToCart}= useContext(CartContext)
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
        , responsive: [
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
      };
    return (
        <>
             <Slider {...settings}>
        {
            shopItems.map((shopItems) =>{
                   
           return(
            <div className="box">
                <div className="product mtop">
                    <div className="img1">
                        <span className="discount">{shopItems.discount}% Off</span>
                        <img src={shopItems.cover} alt=""/>
                    </div>
                    <div className="product-details">
                        <h3>{shopItems.name}</h3>
                        <div className="price">
                            <h4>{shopItems.price}.00</h4>
                            <button
                             onClick={() => addToCart(shopItems)}
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

export default ShopCart;