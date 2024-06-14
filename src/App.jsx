import { useState } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MusicPlayer />
    </>
  )
}

export default App
