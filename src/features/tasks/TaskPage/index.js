import { useParams } from "react-router-dom";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";

function TaskPage() {
  const params = useParams();
  const task = useSelector((state) => getTaskById(state, params.id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? "🗓 " + task.content : "😢 Nie znaleziono zadania"}
        body={
          task ? (
            <Wrapper>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </Wrapper>
          ) : null
        }
      />
    </Container>
  );
}

export default TaskPage;
