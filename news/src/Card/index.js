import styled from "styled-components";
import './Card.css'
import {Link} from "react-router-dom";

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/0.5;
  object-fit: cover;
  object-position: center;
`

const Title=styled.h4`
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
`

function Card({data}) {
    return (
        <Link to={`/${data.id}`} className="card">
            <Image src={data.image?`https://api.labor-rights.am${data.image}`:"https://api.labor-rights.am/media/uploads/faq_rqUAHRs.jpg"} alt="Avatar"/>
            <div className="container">
                <Title>{data.title}</Title>
                <p>{data.created_at}</p>
            </div>
        </Link>
    )
}

export default Card