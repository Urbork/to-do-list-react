import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { Button } from "../../../../pages/TasksPage/styled";
import { selectTasksState, toggleHideDone, setAllDone } from "../../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }: { done: boolean }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </Wrapper>
  );
};

export default Buttons;
