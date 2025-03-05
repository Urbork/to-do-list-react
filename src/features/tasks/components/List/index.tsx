import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button, StyledLink } from "./styled";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../../../../utils/searchQueryParamName.js";
import { useQueryParameter } from "../../../../hooks/useQueryParameters.js";
import { toTask } from "../../../../routes.js";
import { Task } from "../../types";

const List = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const { hideDone } = useSelector(selectTasksState);

  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task: Task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            {/* <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink> */}
            <StyledLink to={toTask({ id: task.id.toString() })}>
              {task.content}
            </StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            X
          </Button>
        </Item>
      ))}
      <p>Liczba wszystkich zadań: {tasks.length}</p>
      <p>
        Liczba ukończoncyh zadań:{" "}
        {tasks.filter((task: Task) => task.done).length}
      </p>
    </TasksList>
  );
};

export default List;
