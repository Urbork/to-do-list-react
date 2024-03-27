import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button, StyledLink } from "./styled.js";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { useQueryParameter } from "../useQueryParameters.js";
import { toTask } from "../../../../routes.js";

const List = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const { hideDone } = useSelector(selectTasksState);

  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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
