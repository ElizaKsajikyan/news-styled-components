import {CardsContainer} from "../CardsContainer";
import {NoResult} from "../NoResult";
import CardVacancies from "../CardVacancies";

function FreeVacancies({data}) {
    console.log(!!data.count)
    return (
        <>
            {
                !!data.count ? <CardsContainer>
                    {!!data.count && data.results.map((el) => (
                        el.name ? <CardVacancies key={el.id} data={el}/> : null
                    ))}
                </CardsContainer> : <NoResult>No Result</NoResult>
            }

        </>
    )
}

export default FreeVacancies