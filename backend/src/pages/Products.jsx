import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Products = () => {
    const url = "http://localhost:4000/api/category"
    const url2 = "http://localhost:4000/api/subCategory"
    const fetchCategory = async () => {
       try {
            const response  = await axios.get(url)
            return response.data
       } catch (error) {
            console.log(error);
       }
    }
    const { data } = useQuery('categories', fetchCategory)
 
    // main categogory
    const [productCategory, setProductCategory] = useState('')
    const [icon, setIcon] = useState('');
    const [subCategory, setSubCategory] = useState('')
 
    const [select, setSelect] = useState('')

    //Submit to backend 
  
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('productCategory', productCategory)
        formData.append('icon', icon)
       

        try {
            const post = await axios.post(url, formData, { productCategory: productCategory, icon: icon })
            console.log(post.data);

            console.log("uploaded");
        } catch (error) {
            console.log(error)
        }


    }
    const handleSubmit2 = async (e) => {
       
        e.preventDefault()
        const formData = new FormData()
    
        formData.append('innerCategory', subCategory)
        formData.append('category', select)
    
        try {
            const post = await axios.post(url2, formData)
            console.log(post.data);
            console.log('uploaded');
            return post.data
        } catch (error) {
            console.log(error);
        }      
           
    }
    return (<div>
        <form className="addProduct w-[50%] mx-auto h-[400px] mt-[200px] px-[20px] bg-blue-700 flex flex-col gap-3" onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
            <h3>Add product</h3>

            <input
                type="file"
                onChange={(e) => setIcon(e.target.files[0])}
                // value={cover}

                accept=".jpeg, .png, .jpg"
                className="h-[30px] inline-block"
                label="Image"

            />
            <label >Product Category</label>
            <input
                type="text"
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}

            />
       
            <button >Submit</button>
        </form>
            {/* SubCate */}
        <form className="addProduct w-[50%] mx-auto h-[400px] mt-[200px] px-[20px] bg-blue-700 flex flex-col gap-3" onSubmit={handleSubmit2} method="post" enctype="multipart/form-data">

           

            <label>Add SubCategory</label>
            <input
                type="text"
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
            />
             <label >Product Category</label>
            <select name="category" value={select} onChange={(e) => setSelect(e.target.value)}  >
                <option value="">Select Category</option>
                {
                    data && data.map((category) => (
                        <option key={category._id} onChange={(e) => e.target.value} value={category._id} >{category.productCategory}  </option>
                    ))
                }
            </select>
            <button >Submit</button>
        </form>
       
    </div>);
}

export default Products;