
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import './App.css';

import HomePage from './home_page/HomePage';
import ProductForm from "./pages/ProductForm";
import Products from "./pages/Products";
import SideNav from './SideNav/SideNav';

const queryClient = new QueryClient()
function App() {
  return (

    <>
     <QueryClientProvider client={queryClient}>
      {/* <SideNav /> */}
      <Router>
      
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/AddProduct' exact element={<ProductForm/>}/>
          <Route path="/Product" exact element={<Products/>}/>
          
        </Routes>

      </Router>
      </QueryClientProvider>
    </>



  );
}

export default App;
