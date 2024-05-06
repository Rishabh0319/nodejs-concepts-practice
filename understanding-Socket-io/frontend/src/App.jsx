import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const App = () => {
  const socketClient = io('http://localhost:3000');

  useEffect(() => {
    // WS connection Request
    socketClient.on('connect', () => {
      console.log(`Connected ID is: ${socketClient.id}`);
    });
  });

  return (
    <div>App</div>
  )
}

export default App