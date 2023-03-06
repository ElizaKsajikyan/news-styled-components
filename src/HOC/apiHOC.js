import {useEffect, useState} from "react";

function GetList(Component, search){
      function NewComponent(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(!search?'https://api.labor-rights.am/news':`https://api.labor-rights.am/news?search=${search}`)
            .then(response => response.json())
            .then(json => setData(json))

    }, [search])
        return  <Component data={data}/>
    }
    return NewComponent;
}

export default GetList