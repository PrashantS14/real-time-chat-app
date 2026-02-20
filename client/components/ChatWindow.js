export default function ChatWindow({ messages }) {
  return (
    <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.user}</strong>: {msg.text}
        </p>
      ))}
    </div>
  );
}
