 import React from 'react'
 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 function Home() {
   const [roomId, setRoomId] = useState('')
   let navigate = useNavigate()
   function handleJoinRoom() {
     if (roomId) {
       navigate(`/room/${roomId}`)
     } else {
       alert('Please enter a room ID')
     }
   }
   return (
     <div className='home'>
       <input type='text' placeholder='Enter room ID...' value={roomId} onChange={(e) => setRoomId(e.target.value)} />
       <button onClick={handleJoinRoom}>Join Now</button>
     </div>
   )
 }
 
 export default Home
 