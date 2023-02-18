import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: teal;
  border: none;
  transition: 1s;
  cursor: pointer;

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  ${({disabled}) => disabled && css`
    color: lightgray;
    cursor: auto;

    &:hover {
      color: lightgray;
    }
  `}
`;