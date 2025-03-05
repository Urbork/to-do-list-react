import Container from "../../components/Container";
import Header from "../../components/Header";
import Form from "../../features/tasks/components/Form";
import List from "../../features/tasks/components/List";
import Buttons from "../../features/tasks/components/Buttons";
import Section from "../../components/Section";
import SearchBar from "../../features/tasks/components/SearchBar";
import FetchExampleTasksButton from "../../features/tasks/components/FetchExampleTasksButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section title="Wyszukaj zadanie" body={<SearchBar />} />
      <Section
        title="Lista zadań"
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
