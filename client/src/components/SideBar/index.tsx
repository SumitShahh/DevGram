import { List, ListItem, ListIcon } from "@chakra-ui/react";
import sections from "../../data/sideBarSections";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <List spacing={2}>
      {sections.map((section, index) => (
        <ListItem key={index} padding={3} fontSize="24px" fontWeight="bold">
          <ListIcon as={section.icon} />
          <Link to={`/${section.route}`}>{section.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
