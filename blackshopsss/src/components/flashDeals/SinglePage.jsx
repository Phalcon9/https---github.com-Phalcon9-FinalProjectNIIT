import { useDispatch, useSelector } from "react-redux";
import {
    //  addToCart, 
     fetchProducts } from "../../../src/store/productSlice";
import {
    //  useContext, useState, 
     useEffect } from "react";
import FlashCard from "./FlashCard";

const SinglePage = () => {
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const {products} =useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchProducts())

    }, [dispatch])

    // const add = (product) => {
    //     dispatch(addToCart(product))
    // }
    // const { singleItem } = useContext(CartContext);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (<>
    <div className="grid gap-[30px]   grid-cols-3">
    {products && products.map((product) => (  
            <FlashCard product={product} /> 
        ))
        }
    </div>
      

    </>);
}

export default SinglePage;