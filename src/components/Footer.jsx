import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import "./Footer.css";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

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
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <AttachFileIcon
        style={{ fontSize: 30, marginLeft: "8px", marginRight: "8px" }}
      />
      <SendIcon style={{ fontSize: 30 }} />
    </Flex>
  );
};

export default Footer;
