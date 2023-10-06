import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  const sendMessage = () => {
    if (inputMessage && inputMessage.trim()) {
      handleSendMessage(inputMessage);
      setInputMessage(""); // Clear the input field after sending
    }
  };

  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{
          border: "1px solid black",
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button
        bg="black"
        color="white"
        borderRadius="none"
        _hover={{
          bg: "white",
          color: "black",
          border: "1px solid black",
        }}
        disabled={!inputMessage || !inputMessage.trim()}
        onClick={sendMessage}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
