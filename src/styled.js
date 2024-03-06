import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    color: red;
  }
`;

// w App.js zamiast Link powinno być NavLink z activeClassName="active"
// a zamiast NavLink powinno być teraz StyledNavLink już bez activeClassName="active"
// w devtools sprawdzić czy dodaje się klasa czy props do aktywnego linku
