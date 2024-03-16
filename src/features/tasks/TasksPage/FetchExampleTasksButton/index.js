import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styled";
import { Error } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(useSelector(selectLoading));
  const [error, setError] = useState(null);

  const handleExampleTasksButton = async () => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(fetchExampleTasks());

      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  if (error) {
    return (
      <Error>
        Wystąpił błąd. <strong>Odśwież stronę lub spróbuj później.</strong>
      </Error>
    );
  }

  return (
    <Button onClick={handleExampleTasksButton} disabled={isLoading}>
      {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default FetchExampleTasksButton;
