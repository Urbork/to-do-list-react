import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 1s;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray};
      cursor: auto;
    `}
`;
