import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../useQueryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import { FormButton } from "../styled";
import Input from "../../Input";

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
