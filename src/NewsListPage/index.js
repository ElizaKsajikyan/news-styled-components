import Card from "../Card";
import {CardsContainer} from "../CardsContainer";
import {NoResult} from "../NoResult";

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