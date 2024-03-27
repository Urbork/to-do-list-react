import { NavigationList, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../../routes";

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </li>
      </NavigationList>
    </nav>
  );
};
