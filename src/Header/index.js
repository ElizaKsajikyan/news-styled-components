import {Link} from "react-router-dom";
import styled from "styled-components";

import SearchComponent from "../SearchComponent";
import './Header.css'

const Navigation = styled.nav`
  gap: 20px;
  display: flex;
`

function Header({onClickSearch}) {
    return (
        <header className='header d-flex'>
            <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/free-vacancies'>Free Vacancies</Link>
            </Navigation>
            <SearchComponent onClickSearch={onClickSearch}/>
        </header>
    )
}

export default Header