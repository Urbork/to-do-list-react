import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const activeClassName = "active";

export const NavigationList = styled.ul`
  height: 8vh;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  list-style: none;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.color.teal};
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  padding: 8px 16px;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    font-size: 1.1rem;
    border-bottom: 1px solid;
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
