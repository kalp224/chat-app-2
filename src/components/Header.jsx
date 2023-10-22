import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Header.css";
//header starts
const Header = () => {
  return (
    <Flex w="100%" justify="space-between" align="center">
      <Flex align="center">
        <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Flex flexDirection="column" mx="5" justify="center">
          <Text fontSize="lg" fontWeight="bold">
            Ferin Patel
          </Text>
          <Text color="green.500">Online</Text>
        </Flex>
      </Flex>
      <MoreVertIcon style={{ marginLeft: "auto", marginRight: "20px" }} />
    </Flex>
  );
};

export default Header;
