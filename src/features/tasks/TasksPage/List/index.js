import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TasksList, Item, Content, Button } from "./styled.js";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";

const List = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const { hideDone } = useSelector(selectTasksState);

  // const { tasks, hideDone } = useSelector(selectTasksState);

  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            X
          </Button>
        </Item>
      ))}
    </TasksList>
  );
};

export default List;
