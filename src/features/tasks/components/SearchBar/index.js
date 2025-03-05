import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../../hooks/useQueryParameters";
import searchQueryParamName from "../../../../utils/searchQueryParamName";
import { Wrapper } from "./styled";
import { FormButton } from "../../../../pages/TasksPage/styled";
import Input from "../Input";

const SearchBar = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const handleDeleteButton = () => {
    replaceQueryParameter({ key: searchQueryParamName, value: "" });
  };

  return (
    <Wrapper>
      <Input
        value={query || ""}
        onChange={onInputChange}
        placeholder="Podaj wyszukiwaną frazę"
      />
      <FormButton onClick={handleDeleteButton}>Usuń frazę</FormButton>
    </Wrapper>
  );
};

export default SearchBar;
