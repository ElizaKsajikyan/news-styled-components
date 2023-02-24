import styled from "styled-components";

export const CardsContainer=styled.section`
  display: grid;
  grid-template-columns: repeat(4,calc((100% - 60px) / 4));
  gap:20px;
  padding: 20px;
`