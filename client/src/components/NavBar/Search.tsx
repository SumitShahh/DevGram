import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input placeholder="Search anything..."></Input>
      </InputGroup>
    </form>
  );
};

export default Search;
