import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="tasks">
    <div className="tasks__interface">
      <h2 className="tasks__heading">{title}</h2>
      {extraHeaderContent}
    </div>
    {body}
  </section>
);

export default Section;
