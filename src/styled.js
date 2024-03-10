import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const activeClassName = "active";

export const NavigationList = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  list-style: none;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.color.teal};
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  border-radius: 8px;
  padding: 8px 16px;

  &:hover {
    color: black;
  }

  &.${activeClassName} {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
