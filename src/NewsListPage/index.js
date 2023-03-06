import Card from "../Card";
import {CardsContainer} from "../CardsContainer";
import styled from "styled-components";

const NoResult=styled.p`
  font-size:50px;
  text-align: center;
  margin: 50px auto;
`

function NewsListPage({data}) {
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