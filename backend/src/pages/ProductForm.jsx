import { useState, useEffect } from "react";
import SideNav from "../SideNav/SideNav";
import axios from "axios";
import { useQuery } from "react-query";

const getCategories = async () => {
    // const url2 = "http://localhost:4000/api/subCategory"
    try {
      const response = await axios.get("http://localhost:4000/api/subCategory")
    //   setProductCategory(response.data)
    console.log(response.data);
    return response.data
    } catch (error) {
      console.log(error);
    }
  }

const ProductForm = () => {
    const url = "http://localhost:4000/api/products"

    const [name, setName] = useState('')
    const [discount, setDiscount] = useState('')
    const [cover, setCover] = useState('')
    const [price, setPrice] = useState('')
    // const [category, setProductCategory] = useState('')
    const [select, setSelect] = useState('')

    const {data} = useQuery('categories', getCategories)


    const handleSubmit = async (e) => {
        e.preventDefault()
      
        console.log(select);
        // console.log('http://localhost:4000/api/category/');
        const formData = new FormData()
        formData.append('name', name)
        formData.append('discount', discount)
        formData.append('cover', cover)
        formData.append('price', price)
        formData.append('subCategory', select)
        try {
            const post = await axios.post(url, formData, { name: name, discount: discount, cover: cover, price: price, subCategory: select })
           
            // console.log(post.data);    
            console.log("uploaded");
        } catch (error) {
            console.log(error)
        }

    }



    return (<>
        <div className="flex ">
            <SideNav />
            <form className="addProduct w-[50%] mx-auto h-[400px] mt-[200px] px-[20px] bg-blue-500 flex flex-col gap-3" onSubmit={handleSubmit} method="post"  encType="multipart/form-data">
                <h3>Add product</h3>
                <label >Product Name</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="bg-slate-500"
                />
                <label >Product Category</label>
                <select name="category" value={select} onChange={(e)=> setSelect(e.target.value)}  >
                    <option value="">Select Category</option>
                {
                    data && data.map((category)=>(
                        <option key={category._id} onChange={(e) => e.target.value} value={category._id} >{category.innerCategory}  </option>
                    ))
                }
                </select>
              

                <label >Discount</label>
                <input
                    type="number"
                    onChange={(e) => setDiscount(e.target.value)}
                    value={discount}

                />
                {/* <label >Product Image</label> */}
                <input
                    type="file"
                    onChange={(e) => setCover(e.target.files[0])}
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
                <button >Submit</button>
            </form>
        </div>

    </>);
}

export default ProductForm;
