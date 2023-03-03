
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Pages from './pages/Pages';

import { CartProvider } from './context/CartContext';
import Cart from './pages/cart/Cart';
import Shopping from './pages/shopping/Shopping';


function App() {
  // const { productItems } = Data;

  // const [cartItem, setCardItem] = useState([])

  return (
    <>
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
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
