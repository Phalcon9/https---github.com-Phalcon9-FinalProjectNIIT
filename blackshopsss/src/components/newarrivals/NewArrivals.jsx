import Carts from "./Cart";
import './style.css'

const NewArrivals = () => {
    return (
        <>
            <section className="newarrivals background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <i className="fa fa-border-all"></i>
                            <h2>New Arrivals</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Carts/>
                </div>
            </section>
        </>
    );
}

export default NewArrivals;