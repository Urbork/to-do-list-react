import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  background-color: white;
`;

export const SectionHeader = styled.header`
  margin-top: 16px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-direction: column;
  }
`;
