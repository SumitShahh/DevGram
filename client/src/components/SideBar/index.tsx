import { Link, List, ListItem, ListIcon } from "@chakra-ui/react";
import sections from "../../data/sideBarSections";

const SideBar = () => {
  return (
    <List spacing={2}>
      {sections.map((section, index) => (
        <ListItem key={index} padding={3} fontSize="24px" fontWeight="bold">
          <ListIcon as={section.icon} />
          <Link>{section.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
