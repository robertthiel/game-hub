import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar..beer Jeab 's brewery</Text>
    </HStack>
  );
};

export default NavBar;
