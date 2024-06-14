
import React from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';

function MusicPlayer() {

    const handleNextButtonClick = () => {
        console.log('Next button clicked');
    }

    const handlePreviousButtonClick = () => {
        console.log('Previous button clicked');
    }

    const handlePlayPauseButtonClick = () => {
        console.log('Play/Pause button clicked');
    }

    const handleShuffleButtonClick = () => {
        console.log('Shuffle button clicked');
    }



  return (
    <div>
      <h1>Music Player</h1>
        <AlbumArt />
        <p>Now playing: Nothing</p>
        <MediaInterface 
            previousButtonClick={ handlePreviousButtonClick } 
            playPauseButtonClick={ handlePlayPauseButtonClick } 
            nextButtonClick={ handleNextButtonClick } 
            shuffleButtonClick={ handleShuffleButtonClick }
        />
        <SongQueue />
    </div>
  );
}

export default MusicPlayer;