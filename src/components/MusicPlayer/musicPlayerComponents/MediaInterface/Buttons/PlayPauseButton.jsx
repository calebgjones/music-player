import { useState, useEffect } from 'react';


function PlayPauseButton({ isPlaying }) {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  }

  const icon = playing ? "fa-pause" : "fa-play";

  return (
    <button onClick={() => { handleClick() }} >
      <i class={`fa-solid ${icon}`}></i>
    </button>
  )
}

export default PlayPauseButton;