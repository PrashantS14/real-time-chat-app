"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const joinChat = () => {
    if (!name.trim()) return alert("Enter username");
    localStorage.setItem("username", name);
    router.push("/chat");
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Join Chat</h1>

      <input
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={joinChat}>Join</button>
    </main>
  );
}
