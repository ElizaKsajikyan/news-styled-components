import {Link} from "react-router-dom";
import SearchComponent from "../SearchComponent";
import './Header.css'
function Header (){
    return(
       <header className='header d-flex'>
           <Link to='/'>Home</Link>
           <SearchComponent/>
       </header>
    )
}

export default Header