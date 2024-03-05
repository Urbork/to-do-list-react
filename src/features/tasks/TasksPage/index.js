import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Form from "../TasksPage/Form";
import List from "../TasksPage/List";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
