import TopCart from "./TopCart";
import './style.css'
import { Link } from "react-router-dom"

const TopCate = () => {
    return (
        <>
            <section className="topCat background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i className="fa fa-border-all"></i>
                            <h2>Top Categories</h2>
                        </div>
                        <div className="heading-right row">
                            <span>   <Link to='/shop'>View All</Link></span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <TopCart/>
                </div>
            </section>
        </>
    );
}

export default TopCate;