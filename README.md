## Real-Time Chat Application

A clean and minimal real-time chat application inspired by WhatsApp, built using Next.js and Socket.IO.
This project focuses on real-time communication, simplicity, and a smooth user experience.

## Features

1. Real-time messaging using Socket.IO

2. WhatsApp-like chat interface

3. Username-based chat (no login required)

4. Messages appear instantly for all connected users

5. Clean and responsive UI

6. Lightweight and beginner-friendly architecture

## Tech Stack

# Frontend

- Next.js (App Router)

- React Hooks

- CSS (custom styling)

# Backend

- Node.js

- Express

- Socket.IO

## Project Structure
realtime-chat-app/
├── client/        # Next.js frontend
├── server/        # Node.js + Socket.IO backend
├── .gitignore
├── README.md

## How It Works

1. A user enters a username and joins the chat room.

2. Messages are sent from the client using Socket.IO.

3. The server receives the message and broadcasts it to all connected clients.

4. Messages instantly appear in the chat window.

5. The sender sees their own messages as well as others.

## Run the Project Locally
# Clone the repository
git clone https://github.com/PrashantS14/real-time-chat-app
cd real-time-chat

# Start the Server
cd server
npm install
node index.js


Server runs on:

http://localhost:4000

# Start the Client
cd client
npm install
npm run dev


Client runs on:

http://localhost:3000

## Usage

1. Open the app in your browser

2. Enter a username

3. Start chatting in real time

4. Open the app in multiple tabs to test live messaging

## Learning Objectives

This project helped me understand:

1. Real-time communication using WebSockets

2. Socket.IO event handling

3. Client–server architecture

4. State management in React

5. Building scalable UI with Next.js App Router

## Future Improvements

1. Private chat rooms

2. Message timestamps

3. Online user list

4. Typing indicators

5. Authentication

## Contributing

Suggestions and improvements are always welcome.
Feel free to fork this repository and submit a pull request.

## Author

Prashant Singh
Aspiring Full-Stack Developer
Focused on building scalable and real-world web applications