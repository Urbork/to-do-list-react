import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled.js";
import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice.js";

const List = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            X
          </Button>
        </Item>
      ))}
    </TasksList>
  );
};

export default List;
