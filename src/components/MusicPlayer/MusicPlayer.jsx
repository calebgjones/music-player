
import React from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';

function MusicPlayer() {
  return (
    <div>
      <h1>Music Player</h1>
        <img src="https://via.placeholder.com/150" alt="Album cover" />
        <p>Now playing: Nothing</p>
        <MediaInterface previousFunction={() => {}} playPauseFunction={() => {}} nextFunction={() => {}}/>
        <SongQueue />
    </div>
  );
}

export default MusicPlayer;