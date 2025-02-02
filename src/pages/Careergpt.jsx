import React, { useState, useRef, useEffect } from "react";
import axios from "../axios";
import ReactMarkdown from "react-markdown";

const Carrergpt = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesRef = useRef(null);

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    const messageText = userInput.trim();
    if (messageText === "") return;

    // Add user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageText, type: "user-message" },
    ]);
    setUserInput("");

    try {
      setIsLoading(true);

      // Simulate API call
      // const response = await fetch("/chat", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ userPrompt: messageText }),
      // });

      const response = await axios.post(
        "/careergpt/chat", // Endpoint URL
        { userPrompt: messageText }, // Request body (no need for `body` key or `JSON.stringify`)
        {
          headers: {
            "Content-Type": "application/json", // Headers
          },
        }
      );

      console.log(response.data.botResponse);

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      const responseData = await response;
      console.log(responseData);
      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text:
            response.data.botResponse || "Sorry, I couldn't understand that.",
          type: "bot-message",
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "There was an error processing your request. Please try again later.",
          type: "bot-message",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages" ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type}`}
            style={{ whiteSpace: "pre-line" }}
          >
            {message.type === "bot-message" ? (
              <ReactMarkdown>{message.text}</ReactMarkdown> // Render Markdown
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        {isLoading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        <button onClick={handleSendMessage} className="send-btn">
          Ask
        </button>
      </div>
    </div>
  );
};

export default Carrergpt;
