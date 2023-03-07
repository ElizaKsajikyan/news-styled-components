import {useEffect, useState} from "react";

function GetList(Component, search,url){
      function NewComponent(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(!search? url:`${url}?search=${search}`)
            .then(response => response.json())
            .then(json => setData(json))

    }, [search])
        return  <Component data={data}/>
    }
    return NewComponent;
}

export default GetList