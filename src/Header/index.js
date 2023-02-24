import {Link} from "react-router-dom";
import SearchComponent from "../SearchComponent";
import './Header.css'
function Header ({onClickSearch}){
    return(
       <header className='header d-flex'>
           <Link to='/'>Home</Link>
           <SearchComponent onClickSearch={onClickSearch}/>
       </header>
    )
}

export default Header