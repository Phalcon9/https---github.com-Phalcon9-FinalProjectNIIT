import { useContext, 
    // useState, useEffect
 } from "react";
// import axios from "axios";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
    addToCart, 
    // fetchProducts 
} from "../../../src/store/cartSlice";

const FlashCard = ({product}) => {
    // const dispatch = useDispatch();
    // const [products, setProducts] = useState([])
    // const [singles, setSingle] = useState([])
    // const singleItem = (product) => {
    //     // singles.find((item) => item._id === product._id);
    
    //     setSingle((prevState) => [{ ...product, qty: 1 }]);
    //   }
    // const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
      dispatch(addToCart(product));
    };
    // const {  addToCart } = useContext(CartContext);
    // useEffect(() => {
    //   dispatch(fetchProducts())
    
    // }, [dispatch])
    
    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/api/products/');
    //             setProducts(response.data)
    //             // dispatch(response.data)
    //             return response.data
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     dispatch(getProduct())
    //     // getProduct()
    // }, [dispatch])

    // const add = (product) => {
    //     dispatch(addToCart(product))
    // }
    const { singleItem } = useContext(CartContext);
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
    return (
        <>
            <section className=" ">

                {/* {products && products.map((product) => ( */}

                    <div className=" h-[100%] justify-self-auto" key={product._id}
               
                    >

                        <div className="" >
                            <Link to='/single'
                                  onClick={() => singleItem(product)} 
                            >
                                <div className="bg-[#f6f6f6]  ">
                                    <img className="object-contain h-[361px] block mx-auto w-[361px]" src={`http://localhost:4000/${product.cover}`} alt="" />
                                </div>
                            </Link>
                            <div className="ml-[10px]">
                                <h6>{product.name}</h6>
                                <h6>${product.price}</h6>
                            </div>
                            <button className="w-[100%] block bg-black text-white rounded-full my-2 h-[50px]"
                            onClick={()=> addToCartHandler(product)}
                             >Add to Bag</button>

                        </div>
                    </div>

                {/* ))
                } */}
            </section>

        </>
    );
}

export default FlashCard;