import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const App = () => {
  const socket = io('http://localhost:3000');
  const [messege, setMessege] = useState('');

  useEffect(() => {
    // WS connection Request
    socket.on('connect', () => {
      console.log(`Connected ID is: ${socket.id}`);
    });
  }, []);

  const sendMessege = () => {
    setMessege('');
    socket.emit('messege', messege);
  }

  return (
    <div>
      <div className="chat-container">
        <div className="chat-frame">
          <input type="text" placeholder='type messege' value={messege} onChange={(e) => setMessege(e.target.value)} />
          <button onClick={sendMessege}>Send Messege</button>
        </div>
      </div>
    </div>
  )
}

export default App;

