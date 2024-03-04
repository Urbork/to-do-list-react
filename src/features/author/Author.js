import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Jonasz Jachym"
      body={
        <>
          <p>
            <strong>Jestem xyz</strong>
          </p>
          <p>Lubię...</p>
        </>
      }
    />
  </Container>
);
