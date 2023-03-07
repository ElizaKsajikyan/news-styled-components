import styled from "styled-components";
import './Card.css'
import {Link} from "react-router-dom";

const Title=styled.h4`
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`

function CardVacancies({data}) {
    return (
        <Link to={`/${data.id}`} className="card">
            <div className="container">
                <Title>{data.name}</Title>
                <p>{data.description}</p>
            </div>
        </Link>
    )
}

export default CardVacancies