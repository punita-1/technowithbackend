import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: transparent;
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: 1px solid white;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    box-shadow: 0 0.5rem 0.5rem 0 #ffffff50;
    border: 2px solid lightgrey;
    transform: scale(0.90);

  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
  }
  
`;
