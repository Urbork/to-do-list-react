import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage/index";
import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/AuthorPage";
import { NavigationList, StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <NavigationList>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </li>
      </NavigationList>
    </nav>

    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
