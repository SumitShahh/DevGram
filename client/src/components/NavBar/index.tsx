import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";
import logo from "/src/images/logo.png";

const index = () => {
  return (
    <HStack>
      <Image src={logo} title="DevGram" />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default index;
