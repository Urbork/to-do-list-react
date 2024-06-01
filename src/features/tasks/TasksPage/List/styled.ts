import { Link } from "react-router-dom";
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
  border-bottom: 2px solid ${({ theme }) => theme.color.white};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span<{ done?: boolean }>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
    color: ${({ theme }) => theme.color.teal};
  }
`;

export const Button = styled.button<{
  remove?: boolean;
}>`
  margin: 0 8px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.green};
  color: white;
  border: none;
  transition: 1s;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
    transform: scale(1.1);
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};

      &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
      }
    `}
`;
