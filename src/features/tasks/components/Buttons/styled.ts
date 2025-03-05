import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;
