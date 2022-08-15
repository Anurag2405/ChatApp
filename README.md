# ChatApp using MERN stack and socket io
This application built using MongoDB,Express,React,nodejs


# Features
  <li>Real-time communication between a client and a server using Socket.io.</li>
  <li>Uses MongoDB, Mongoose  for storing messages.</li>
  <li>Users can create one to one chats and group chats</li> 
  <li>Passwords encrypted using bcrypt</li>
 
# Hosted using heroku
https://atxchat.herokuapp.com/chats
 
## Sockets
    
   Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by Socket.io.

   The client starts by connecting to the server through a socket. Once connections is successful, client and server can emit and listen to events. 


### Running Locally

Make sure you have Node.js and npm install.

  1. Clone or Download the repository 
  2. Install Dependencies
      <pre>npm install</pre>
  3. node backend/server.js
  
