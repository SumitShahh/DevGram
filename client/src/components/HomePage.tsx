import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Creators from "./TopCreatorsList";
import Content from "./Content";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "navbar" "main" `,
        lg: `"navbar navbar navbar" "aside main creators"`,
      }}
      padding={3}
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr 200px`,
      }}
    >
      <GridItem area="navbar">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Content />
      </GridItem>
      <Show above="lg">
        <GridItem area="creators">
          <Creators />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default HomePage;
