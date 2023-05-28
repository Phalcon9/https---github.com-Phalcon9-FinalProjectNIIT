import SideNav from "../../components/sideNav/SideNav";
import MenNav from "./MenNav";
import bg from './nike-just-do-it.jpg'
import shoe from './nike10.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Men = () => {
    function name (){
        
    }
    const settings = {
        dot: true,
    
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500
      };
    return (<>

        <MenNav />
        {/* <SideNav/> */}
        <p>Welcome</p>
        <img src={bg} alt="" className="mx-auto w-[95%]" />
        <article className="grid place-items-center gap-y-[10px] ">
            <h1 className="text-7xl font-bold tracking-tighter font-mono">BRING THE VIBES</h1>
            <p>Add legendary style to any look with the Air Max 270, Air Max TW SE, and More</p>
            <button className="bg-black text-white rounded-full w-40 h-9">Shop All Air Max</button>
        </article>

        <Slider  {...settings} className="mx-[30px] bg-red-400">
            
{/*                 
                    <img src={shoe} alt="" className="w-[200px] mx-[20px]" />
                
              
                    <img src={shoe} alt="" className="w-[200px] mx-[20px]" />
         
                <div className="">
                    <img src={shoe} alt="" className="w-[200px]" />
                </div>
                <div className="">
                    <img src={shoe} alt="" className="w-[200px]" />
                </div>
                <div className="">
                    <img src={shoe} alt="" className="w-[200px]" />
                </div>
                <div className="bg-green-500 w-[100px] inline-block">
                    <img src={shoe} alt="" className="w-[200px] mx-auto" />
                </div> */}
                {/* <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" />
            <img src={shoe} alt="" className="" /> */}

            
        </Slider>   
    </>);
}

export default Men;