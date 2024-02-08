import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          onSearch(searchRef.current.value);
        }
      }}
    >
      <InputGroup borderRadius={20} variant="filled">
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
