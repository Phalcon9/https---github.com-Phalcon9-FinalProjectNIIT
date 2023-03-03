import SideNav from "../SideNav/SideNav";
import MainBody from "./components/MainBody/MainBody";
import SearchBar from "./components/searchbar/SearchBar";


const HomePage = () => {
    return (<div className="flex ">
        <SideNav className='' />
        <div className="flex-col w-[100%]">
        <SearchBar className=''/>
        <MainBody className=''/>
        </div>
       
    </div>);
}

export default HomePage;