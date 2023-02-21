import Card from "../Card";
import {CardsContainer} from "../CardsContainer";
import {useEffect, useState} from "react";

function NewsListPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.labor-rights.am/news')
            .then(response => response.json())
            .then(json => setData(json))

    }, [])
    useEffect(() => {
        console.log(data.results);
    }, [data])
    return (
        <CardsContainer>
            {!!data.count && data.results.map((el) => (
                el.title ? <Card key={el.id} data={el}/> : null
            ))}
        </CardsContainer>
    )
}

export default NewsListPage