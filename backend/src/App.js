
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import './App.css';

import HomePage from './home_page/HomePage';
import ProductForm from "./pages/ProductForm";
import SideNav from './SideNav/SideNav';

function App() {
  return (

    <>
      {/* <SideNav /> */}
      <Router>
      
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/AddProduct' exact element={<ProductForm/>}/>
        </Routes>

      </Router>
    </>



  );
}

export default App;
