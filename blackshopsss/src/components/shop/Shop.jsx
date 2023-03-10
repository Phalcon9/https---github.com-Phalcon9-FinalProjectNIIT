import Catg from "./Catg";
import ShopCart from "./ShopCart";
import { Link } from "react-router-dom"

const Shop = () => {
    return (
        <>
            <section className="background">
                <div className="container">
                    <Catg />
                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <i className="fa fa-border-all"></i>
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
                            <span><Link to='/shop'>View All</Link></span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>
                    </div>
                    <ShopCart/>
                </div>
            </section>
        </>
    );
}

export default Shop;