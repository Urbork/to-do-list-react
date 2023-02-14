import { TasksList, Item, Content, Button } from "./styled.js";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task) => (
      <Item
        hidden={task.done && hideDone}
        key={task.id}
      >
        <Button onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button remove onClick={() => removeTask(task.id)}>
          X
        </Button>
      </Item>
    ))}
  </TasksList>
);

export default List;
