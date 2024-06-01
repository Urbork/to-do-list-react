import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

const AuthorPage = () => (
  <Container>
    <Header title="Kilka słów o mnie" />
    <Section
      title="🚀 Jonasz Jachym"
      body={
        <Wrapper>
          <p>
            <strong>Witaj! Jestem Jonasz, entuzjasta programowania.</strong>
          </p>
          <p>
            Moja pasja do technologii skłoniła mnie do zgłębiania tajników
            kodowania, a aplikacja listy zadań jest jednym z moich projektów.
            Oprócz kodowania, uwielbiam kosmos, psychologię i eksplorować nowe
            gry. Moją motywacją w nauce programowania jest chęć tworzenia
            nowych, przydatnych aplikacji, które ułatwiają życie ludziom.
          </p>
        </Wrapper>
      }
    />
  </Container>
);

export default AuthorPage;
