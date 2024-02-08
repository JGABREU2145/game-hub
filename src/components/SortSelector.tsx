import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSortOrder: (order: string) => void;
  selectedSortOrder?: string;
}

const SortSelector = ({
  onSelectSortOrder,
  selectedSortOrder,
}: SortSelectorProps) => {
  const sortOrders = [
    {
      value: "",
      Label: "Relevance",
    },
    {
      value: "-added",
      Label: "Date added",
    },
    {
      value: "-name",
      Label: "Name",
    },
    {
      value: "-released",
      Label: "Release Date",
    },
    {
      value: "-metacritic",
      Label: "Popularity",
    },
    {
      value: "-rating",
      Label: "Average rating",
    },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${
          sortOrders.find((order) => order.value === selectedSortOrder)
            ?.Label || "Relevance"
        }
            `}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.Label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
