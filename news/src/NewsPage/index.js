import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import './NewsPage.css'

function NewsPage() {
    const {id} = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.labor-rights.am/news/${id}`)
            .then(response => response.json())
            .then(json => setData(json))

    }, [id])
    return (
        <section className='container'>
            <h1 className='title'>{data.title}</h1>
            <img className='image' src={data.image}/>
            <p>{data.description}</p>
        </section>
    )
}

export default NewsPage