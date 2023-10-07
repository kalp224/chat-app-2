import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import "./styles.css";

const Messages = ({ messages, loadOlderMessages }) => {
  const messagesContainerRef = useRef();

  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (container.scrollTop === 0 && messages.length > 0) {
      loadOlderMessages();
    }
  };

  useEffect(() => {
    const container = messagesContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [loadOlderMessages]);

  return (
    <Flex
      className="messages-container"
      flexDirection="column"
      p="3"
      overflowY="scroll"
      overflowX="hidden"
      h="75vh"
      ref={messagesContainerRef}
      bg="#F0F0F0"
    >
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="#0081C9"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                borderTopRadius="10"
                borderTopLeftRadius="10px"
                borderBottomRightRadius="0px"
                borderBottomLeftRadius="10px"
                boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.08)"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name="Computer"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                bg="blue.300"
              ></Avatar>
              <Flex
                bg="#F7F7F7"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                borderTopLeftRadius="0px"
                borderTopRightRadius="10px"
                borderBottomRightRadius="10px"
                borderBottomLeftRadius="10px"
                boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.08)"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
    </Flex>
  );
};

export default Messages;
