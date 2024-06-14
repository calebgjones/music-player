
import React from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';

function MusicPlayer() {
  return (
    <div>
      <h1>Music Player</h1>
        <img src="https://via.placeholder.com/150" alt="Album cover" />
        <p>Now playing: Nothing</p>
        <MediaInterface previousFunction={() => {}} playPauseFunction={() => {}} nextFunction={() => {}}/>
    </div>
  );
}

export default MusicPlayer;