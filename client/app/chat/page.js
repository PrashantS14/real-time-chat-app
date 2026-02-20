"use client";
import { useEffect, useState, useRef } from "react";
import { socket } from "../../lib/socket";
import "./chat.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) return;
    setUsername(user);

    socket.connect();

    socket.on("chat-history", (history) => {
      setMessages(history);
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat-history");
      socket.off("message");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("message", {
      user: username,
      text,
    });

    setText("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Room</div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`bubble ${
              msg.user === username ? "sent" : "received"
            }`}
          >
            {msg.user !== username && (
              <div className="sender">{msg.user}</div>
            )}
            <div>{msg.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}
