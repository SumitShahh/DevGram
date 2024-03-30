import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<FaSearch />} />
      <Input placeholder="Search anything..."></Input>
    </InputGroup>
  );
};

export default Search;
