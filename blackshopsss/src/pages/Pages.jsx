import FlashDeals from "../components/flashDeals/FlashDeal";
import Footer from "../components/footer/Footer";

import SideNav from "../components/sideNav/SideNav";


const Pages = () => {
    return (
        <>
            {/* <Home /> */}
            <div className="flex flex-row">
                <SideNav className="basis-4" />
                <FlashDeals />
            </div>
            <Footer />

        </>
    );
}

export default Pages;