import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    } else {
      alert('Please enter a room ID');
    }
  };

  return (
    <div className='home-container'>
      <div className='home-card'>
        <h1 className='home-title'>Join a Live Stream</h1>
        <p className='home-description'>Enter a room ID to start or join a video call.</p>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter room ID...'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className='room-input'
          />
          <button onClick={handleJoinRoom} className='join-button'>
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;