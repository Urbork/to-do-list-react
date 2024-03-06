import styled from "styled-components";

export const MainForm = styled.form`
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 16px;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.teal};
  color: white;
  border: none;
  transition: 1s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: brightness(120%);
  }
`;
