import {Input} from "../Input";
import {Button} from "../Button";

function SearchComponent({onClickSearch}){
    const [inputVal,setInputValue]=useState('')

    function getSearchText({target}){
            setInputValue(target.value)

    }

    return(
        <form className="d-flex">
            <Input placeholder='Search...' onChange={getSearchText} value={inputVal}/>
            <Button type='button' onClick={()=>{onClickSearch(inputVal)}}>&#x1F50E;&#xFE0E;</Button>
        </form>
    )
}

export default SearchComponent