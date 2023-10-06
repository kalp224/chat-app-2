import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import "./styles.css";

const Messages = ({ messages, loadOlderMessages }) => {
  const messagesContainerRef = useRef();

  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (container.scrollTop === 0) {
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
      h="75vh"
      ref={messagesContainerRef}
    >
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
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
                bg="gray.100"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
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
