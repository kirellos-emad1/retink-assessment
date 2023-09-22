import '../App.css'
import HeaderBar from "./HeaderBar";
import LittleNav from "./LittleNav";


export default function Navigation() {
    return(
        <div className="nav--container">
            <HeaderBar></HeaderBar>
            <LittleNav></LittleNav>
        </div>
    )
}