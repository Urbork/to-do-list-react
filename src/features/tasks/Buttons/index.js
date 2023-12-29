import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled.js";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice.js";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </Wrapper>
  );
};

export default Buttons;
