import { useLocation, useHistory } from "react-router-dom";
import { Wrapper } from "./styled";
import Input from "../Input";
import searchQueryParamName from "../TasksPage/searchQueryParamName";

const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Input
        value={query || ""}
        onChange={onInputChange}
        placeholder="Podaj wyszukiwaną frazę"
      />
    </Wrapper>
  );
};

export default SearchBar;
