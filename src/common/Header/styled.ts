import styled from "styled-components";

export const MainHeader = styled.section`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    text-align: center;
  }
`;
