
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Pages from './pages/Pages';

import { CartProvider } from './context/CartContext';
import Cart from './pages/cart/Cart';
import Shopping from './pages/shopping/Shopping';
import Men from './pages/men/Men';
import SingleCard from './components/flashDeals/SingleCard';
import FilterContext from './context/FilterContext';


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
            <Route path="/" exact
              element=
              { <Pages /> }>
            </Route>
            <Route path="/shop" exact 
            element = {<Shopping/>}>
            </Route>
            <Route path="/cart" exact
              element=
              { <Cart />}>
            </Route>
            <Route path='/men' exact element={<Men/>}></Route>
            <Route path='/single' exact element={<SingleCard/>}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
