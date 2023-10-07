import React, { useState, useEffect, useRef } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";
import { Flex } from "@chakra-ui/react";

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const loadOlderMessages = async () => {
    try {
      console.log("Loading older messages...");

      const response = await fetch(
        `https://qa.corider.in/assignment/chat?page=0`
      );

      const data = await response.json();
      console.log("Data received:", data);

      setMessages((prevMessages) => [...data.chats, ...prevMessages]);
      console.log("Updated Messages:", [...data.chats, ...messages]);

      setPageNumber(pageNumber + 1);
    } catch (error) {
      console.error("Error loading older messages:", error);
    }
  };

  useEffect(() => {
    loadOlderMessages();
  }, []);

  const handleSendMessage = (message) => {
    if (!message.trim().length) {
      return;
    }

    setMessages((old) => [...old, { from: "me", text: message }]);

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: message }]);
    }, 1000);
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w="40%" h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} loadOlderMessages={loadOlderMessages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
