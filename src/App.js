import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/author">O autorze</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
