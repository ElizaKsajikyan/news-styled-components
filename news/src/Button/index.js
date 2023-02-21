import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid #004668;
  background: #004668;
  color: #fff;
  padding: 10px;
  transition:all 300ms;
  cursor:pointer;
  :focus {
    outline:none;
  };
  :hover {
    background: #fff;
    color: #004668;
  }
`