import { useState } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import Notification, { notify } from './components/Notifications.jsx';

function App() {
  const createNotification = (message, type) => {
    notify(message, type);
  }

  return (
    <>
      <Notification />
      <MusicPlayer createNotification={ createNotification } />
    </>
  )
}

export default App
