import { useState, useEffect } from 'react';


function PlayPauseButton({ onClick, isPlaying  }) {

  const handleClick = () => {
    onClick();
    console.log('Play/Pause Button Clicked');
  }



  return (
    <button onClick={() => { handleClick() }} >
      <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
    </button>
  )
}

export default PlayPauseButton;