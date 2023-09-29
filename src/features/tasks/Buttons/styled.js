import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

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
