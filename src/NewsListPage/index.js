import Card from "../Card";
import {CardsContainer} from "../CardsContainer";
import {useEffect, useState} from "react";
import styled from "styled-components";

const NoResult=styled.p`
  font-size:50px;
  text-align: center;
  margin: 50px auto;
`
function NewsListPage({search}) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(!search?'https://api.labor-rights.am/news':`https://api.labor-rights.am/news?search=${search}`)
            .then(response => response.json())
            .then(json => setData(json))

    }, [search])

        return (
            <>
                {
                    !!data.count ?   <CardsContainer>
                        {!!data.count && data.results.map((el) => (
                            el.title ? <Card key={el.id} data={el}/> : null
                        ))}
                    </CardsContainer> : <NoResult>No Result</NoResult>
                }

            </>
        )

}

export default NewsListPage