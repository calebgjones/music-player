import { useState, useEffect } from 'react';


function PlayPauseButton({ isPlaying }) {

  const handleClick = () => {
    onClick();
    console.log('Play/Pause Button Clicked');
  }

  const icon = playing ? "fa-pause" : "fa-play";

  return (
    <button onClick={() => { handleClick() }} >
      <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
    </button>
  )
}

export default PlayPauseButton;