
import React from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';

function MusicPlayer() {
  return (
    <div>
      <h1>Music Player</h1>
        <img src="https://via.placeholder.com/150" alt="Album cover" />
        <p>Now playing: Nothing</p>
        <button>Next</button>
        <button>Play</button>
        <button>Pause</button>
        <button>Previous</button>
        <MediaInterface />
    </div>
  );
}

export default MusicPlayer;