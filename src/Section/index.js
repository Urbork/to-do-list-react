import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="tasks">
    <div className="tasks__interface">
      <h2 className="tasks__heading">{title}</h2>
      {extraHeaderContent}
      {/* <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} /> */}
    </div>
    {body}
    {/* <List tasks={tasks} hideDoneTasks={hideDoneTasks} /> */}
  </section>
);

export default Section;
