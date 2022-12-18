import "./style.css";

const Form = () => (
  <form className="form">
    {/* <h2 className="form__heading">Dodaj nowe zadanie</h2>
    <div className="form__interface"> */}
    <input
      className="form__input"
      type="text"
      placeholder="Co jest do zrobienia?"
      autoFocus
    />
    <button className="form__button">Dodaj zadanie</button>
    {/* </div> */}
  </form>
);

export default Form;
