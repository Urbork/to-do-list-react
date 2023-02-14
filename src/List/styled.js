import styled, { css } from "styled-components";

export const TasksList = styled.ul`
  padding: 8px 16px;
  list-style: none;
`;

export const Item = styled.li`
  padding: 8px 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 8px;
  align-items: center;
  border-bottom: 2px solid whitesmoke;

  ${({hidden}) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.span`
  ${({done}) => done && css`
    text-decoration: line-through;
  `} 
`;

export const Button = styled.button`
  margin: 0 8px;
  width: 30px;
  height: 30px;
  background-color: green;
  color: white;
  border: none;
  transition: 1s;
  cursor: pointer;

  &:hover {
    background-color: hsl(120, 100%, 35%);
  }

  ${({remove}) => remove && css`
    background-color: red;

    &:hover {
      background-color: hsl(0, 100%, 65%);
    }
  `}
`;