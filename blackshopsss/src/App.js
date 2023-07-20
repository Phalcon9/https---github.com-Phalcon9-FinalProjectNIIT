
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Pages from './pages/Pages';

import { CartProvider } from './context/CartContext';
import Cart from './pages/cart/Cart';
import Shopping from './pages/shopping/Shopping';

import SingleCard from './components/flashDeals/SingleCard';
import FilterContext from './context/FilterContext';
import Checkout from './pages/checkout/Checkout';
import Home from './landingPage/Products';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer/Footer';



function App() {
  // const { productItems } = Data;

  // const [cartItem, setCardItem] = useState([])

  return (
    <>
      {/* <FilterContext>
        
      </FilterContext> */}
      <CartProvider>
        <Router>
          <Header />
        
          <Routes>
            {/* <Route path="/" exact element={ <Pages /> }>  </Route> */}
            <Route path='/' exact element={<LandingPage></LandingPage>}></Route>
            <Route path='/products' exact element={<Home></Home>}></Route>
            <Route path="/shop" exact element = {<Shopping/>}></Route>
            <Route path="/cart" exact element={ <Cart />}> </Route>
            <Route path='/checkout' exact element={<Checkout/>} ></Route>
            <Route path='/single' exact element={<SingleCard/>}></Route>
          </Routes>
          <Footer/>
        </Router>
        
      </CartProvider>
    </>
  );
}

export default App;
