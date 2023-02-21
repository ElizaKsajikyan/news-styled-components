import {Input} from "../Input";
import {Button} from "../Button";
import { useNavigate } from 'react-router-dom';

function SearchComponent(){
    const navigate = useNavigate();
    const goToPosts = () => navigate({
        pathname: '/search',
        search: '?sort=date&order=newest',
    });

    function getSearchText({target}){
        console.log(target.value);
    }
    return(
        <form className="d-flex">
            <Input placeholder='Search...' onKeyUp={getSearchText} />
            <Button onClick={goToPosts}>&#x1F50E;&#xFE0E;</Button>
        </form>
    )
}

export default SearchComponent