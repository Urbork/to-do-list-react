import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść śniadanie", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      {/* <main className="container"> */}
      <Header title="Lista zadań" />
      {/* <header className="header">
        <h1 className="header__heading">Lista zadań</h1>
      </header> */}
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      {/* <section>
        <Form />
      </section> */}
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
      {/* <section className="tasks">
        <div className="tasks__interface">
          <h2 className="tasks__heading">Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
        <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </section> */}
      {/* </main> */}
    </Container>
  );
}

export default App;
