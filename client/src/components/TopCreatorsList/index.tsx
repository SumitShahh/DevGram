import {
  List,
  ListItem,
  Image,
  ListIcon,
  HStack,
  Link,
} from "@chakra-ui/react";
import returnTopCreators from "../../data/topCreators";

const index = () => {
  const topCreators = returnTopCreators(11);
  return (
    <List spacing={2}>
      {topCreators.map((topCreator) => (
        <ListItem
          key={topCreator.username}
          fontSize="16px"
          padding={1}
          as={HStack}
          border="1px grey solid"
          borderRadius={12}
        >
          <ListIcon
            as={Image}
            src={topCreator.picture}
            boxSize="40px"
            borderRadius="50%"
          />
          <Link>{topCreator.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default index;
