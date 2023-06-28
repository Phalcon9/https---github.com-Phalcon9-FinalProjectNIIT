const Checkout = () => {
    return (<>
        <h1 className="text-center">Checkout</h1>
        <div className="flex flex-row w-[75%] mx-auto gap-9">
            <div className="basis-[60%]">
                Delivery options
                <div className="grid grid-cols-2 gap-3">
                    <button className="w-[100%] block border-gray-300 border-[1px] rounded h-[50px]">Favorite</button>
                    <button className="w-[100%] block border-gray-300 border-[1px] rounded h-[50px]">Favorite</button>
                </div>
                <div>
                    <form action="" className="grid grid-rows-5  w-[80%] bg-orange-800">
                        <input type="text" placeholder="name1" className="border-gray-300 border-[1px] rounded  row-start-1 " />
                        <input type="text" placeholder="name2" className="border-gray-300 border-[1px] rounded h-[50px] row-start-1" />
                        <input type="text" placeholder="name3" className="border-gray-300 border-[1px] rounded h-[50px] row-start-2 " />
                        <input type="text" placeholder="nam4" className="border-gray-300 border-[1px] rounded h-[50px] row-start-3" />

                    </form>
                </div>
            </div>
            <div className="basis-[40%]">In your Bag</div>
        </div>
    </>);
}

export default Checkout;