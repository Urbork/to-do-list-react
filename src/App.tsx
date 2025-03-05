import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./pages/TaskPage/index";
import TasksPage from "./pages/TasksPage/index";
import AuthorPage from "./pages/AuthorPage/index";
import { Navigation } from "./components/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
