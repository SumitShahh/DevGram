import { useColorMode, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode == "dark"}
      onChange={toggleColorMode}
      colorScheme="green"
    />
  );
};

export default ColorModeSwitch;
