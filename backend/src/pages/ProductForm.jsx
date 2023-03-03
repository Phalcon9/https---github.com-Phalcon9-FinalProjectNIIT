import { useState } from "react";
import SideNav from "../SideNav/SideNav";
import axios from "axios";

const convertToBase64 = (file) =>{
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload=() =>{
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
const url = "http://localhost:4000/api/products"
const ProductForm = () => {
    const [name, setName] = useState('')
    const [discount, setDiscount] = useState('')
    const [cover, setCover] = useState({myFile : ""})
    const [price, setPrice] = useState('')


    const addProduct = async (newProduct) => {
        try {
            await axios.post(url, newProduct)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        addProduct(name,discount,cover, price)
        console.log("uploaded");
    }
    const handleFileUpload = async (e) =>{
       const file =  e.target.files[0]
       const base64 = await convertToBase64(file)
       setCover({ ...cover, myFile : base64})
    }

   
    return (<>
    <div className="flex ">
        <SideNav/>
    <form className="addProduct w-[50%] mx-auto h-[400px] mt-[200px] px-[20px] bg-blue-700 flex flex-col gap-3"  onSubmit={handleSubmit}>
            <h3>Add product</h3>
            <label >Product Name</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-slate-500"
            />
             <label >Discount</label>
            <input
                type="number"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}

            />
             {/* <label >Product Image</label> */}
            <input
                type="file"
                onChange={(e) => handleFileUpload(e)}
                // value={cover}
                accept=".jpeg, .png, .jpg"
                className="h-[30px] inline-block"
                label="Image"
  
            />
             <label >Product Price</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
  
            />
            <button type="button">Submit</button>
        </form>
    </div>
       
    </>);
}

export default ProductForm;
