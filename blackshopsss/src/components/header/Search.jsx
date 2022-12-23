import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Search = () => {

    const {items} = useContext(CartContext)

    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", this.window.scrollY > 100)

    })
    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">

                    </div>
                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type='text' placeholder="Search and hit enter" />
                        <span>All category</span>
                    </div>
                    <div className="icon f_flex width">
                        <i className="fa fa-user icon_circle"></i>
                        <div className="cart">
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span >{items.length}</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Search;