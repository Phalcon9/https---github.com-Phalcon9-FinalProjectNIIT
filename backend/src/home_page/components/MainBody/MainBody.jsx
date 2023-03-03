import SearchBar from "../searchbar/SearchBar";

const MainBody = () => {

    const updates = [
        {
            name: 'Daily views', count: '1,504', icon: 'visibility'
        },
        {
            name: 'Sales', count: '1,504', icon: 'shopping_cart'
        },
        {
            name: 'Comments', count: '1,504', icon: 'forum'
        },
        {
            name: 'Earning', count: '1,504', icon: 'paid'
        },
    ]
    const orders = [
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },
        {
            name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered'
        },

    ]
    const customers = [
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
        {
            firstName: 'Dave', lastName: 'Kelly', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mkPc6WxLN8sDkcPxbPhblvmGBQAlTFBizm-JmqrKs3VevFY&amp;s'
        },
    ]
    return (<>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-[95%] mx-auto gap-4">

            
            {updates.map((update, index) => {
                return (
                    <div className="shadow-md min-w-[150px] w-[300px] h-[120px] rounded px-auto relative " key={index}>
                        <span class="material-symbols-outlined absolute right-[20px] top-[40px] inline-block scale-x-150 scale-y-150">
                            {update.icon}
                        </span>
                        <span className="absolute top-[20px] left-[10px]">{update.count}</span>
                        <p className="absolute top-[50px] left-[10px]">{update.name}</p>
                    </div>
                )
            })}

            <div className="col-span-3 shadow-md w-[100%] p-[15px]">
                <span>Recent order</span> <span>view all</span>
                <table className="table-auto border-spacing-0 w-[100%] mx-auto border-collapse" >
                    <thead className="">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        orders.map((order, i) => {
                            return (

                                <tbody key={i}>
                                    <tr className="border-b-stone-600 border-t-transparent border-r-transparent border-l-transparent border-2 h-[50px] w-[300px] ">
                                        <td >{order.name}</td>
                                        <td >{order.price}</td>
                                        <td >{order.payment}</td>
                                        <td >{order.status}</td>
                                    </tr>

                                </tbody>

                            )
                        })
                    }
                </table>
            </div>
            <div className="shadow-md h-[500px] overflow-auto   w-[100%]" >
                Recent Customers

                <div className="   ">
                {
                    customers.map((customer, i) => {
                        return (
                            <div className="relative w-[100%] h-[50px] max-h-[60px] " key={i} >
                                <img className="absolute left-[10px] object-contain w-[45px] rounded-full border-2 h-[45px] "
                                    src={customer.img}
                                    alt="addidas" />
                                <span class="absolute left-[60px]  text-[10px] px-[5px]">{customer.firstName}</span>
                                <span class="absolute text-zinc-600 right-[10px] text-[10px]">{customer.lastName}</span>
                            </div>
                        )
                    })
                }
                </div>

              

            </div>
        </div>


    </>);
}

export default MainBody;