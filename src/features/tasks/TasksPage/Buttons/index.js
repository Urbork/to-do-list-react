import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled.js";
import { Button } from "../styled.js";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice.js";

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
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </Wrapper>
  );
};

export default Buttons;
