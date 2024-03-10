import { useLocation, useHistory } from "react-router-dom";
// import useQueryParameters from "../useQueryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import { FormButton } from "../styled";
import Input from "../../Input";

const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const deleteSearchParams = () => {
    searchParams.delete(searchQueryParamName);
  };

  const pushHistory = () => {
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      // searchParams.delete(searchQueryParamName);
      deleteSearchParams();
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    pushHistory();
  };

  const handleDeleteButton = () => {
    // searchParams.delete(searchQueryParamName);
    deleteSearchParams();
    pushHistory();
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

// const SearchBar = () => {
//   const { useQueryParameter, useReplaceQueryParameter } = useQueryParameters;
//   const query = useQueryParameter(searchQueryParamName);
//   const replaceQueryParameter = useReplaceQueryParameter();

//   const onInputChange = ({ target }) => {
//     replaceQueryParameter({
//       key: searchQueryParamName,
//       value: target.value.trim() !== "" ? target.value : undefined,
//     });
//   };

//   const handleDeleteButton = () => {
//     replaceQueryParameter({ key: searchQueryParamName, value: "" });
//   };

//   return (
//     <Wrapper>
//       <Input
//         value={query || ""}
//         onChange={onInputChange}
//         placeholder="Podaj wyszukiwaną frazę"
//       />
//       <FormButton onClick={handleDeleteButton}>Usuń frazę</FormButton>
//     </Wrapper>
//   );
// };

// export default SearchBar;
