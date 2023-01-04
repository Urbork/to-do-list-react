import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__interface">
      <h2 className="section__heading">{title}</h2>
      {extraHeaderContent}
    </div>
    {body}
  </section>
);

export default Section;
