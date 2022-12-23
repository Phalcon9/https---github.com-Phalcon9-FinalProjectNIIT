import Ndata from "./NdData";

const Carts = () => {
    return (
        <>
            <div className="content grid product">
                {
                    Ndata.map((vale, index) =>{
                        return(
                            <div className="box" key={index}>
                                <div className="img">
                                    <img src={vale.cover} alt="" />
                                </div>
                                <h4>{vale.name}</h4>
                                <span>{vale.price}</span>
                            </div>
                        )
                    } )
                }
            </div>
        </>
    );
}

export default Carts;