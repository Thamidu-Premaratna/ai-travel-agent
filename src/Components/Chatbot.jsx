import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatBot from "react-simple-chatbot";
export default function Chatbot() {
  const api = "AIzaSyDZ5FhsUjwKXzYp15cmxmAB1woKTIWaxs0";
  const steps = [
    {
      id: "0",
      message: "Welcome to react chatbot!",
      trigger: "1",
    },
    {
      id: "1",
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message: "You entered: {previousValue}", // This will display the user's input
      trigger: "3",
    },
    {
      id: "3",
      message: "Another message or action here...",
      // Define the next trigger or end the conversation based on your requirements
    },
  ];

  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  useEffect(() => {
    const StartChat = async (prompt) => {
      try {
        const genAI = new GoogleGenerativeAI(api);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setOutput(text);
      } catch (error) {
        setOutput("Error ");
      }
    };

    StartChat();
  }, []);

  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
}
