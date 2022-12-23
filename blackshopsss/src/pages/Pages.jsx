import FlashDeals from "../components/flashDeals/FlashDeal";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
import Home from "../landingPage/Home";

const Pages = () => {
    return (
        <>
            <Home />
            <FlashDeals />
            <TopCate />
            <NewArrivals/>
            <Shop/>
        </>
    );
}

export default Pages;