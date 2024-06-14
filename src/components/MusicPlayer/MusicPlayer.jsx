import React from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import { songs } from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';

export var currentSong = songs[0];

function MusicPlayer() {

  const handleNextButtonClick = () => {
    // Find the index of the current song
    const currentIndex = songs.indexOf(currentSong);
    
    // Move to the next song in the array
    const nextIndex = (currentIndex + 1) % SongList.length;
    const nextSong = SongList[nextIndex];
    
    // Update the randomSong state with the next song
    currentSong = nextSong;

    // Update the currently playing song
    console.log('Next button clicked');
    console.log('Now playing:', currentSong);


  }

  const handlePreviousButtonClick = () => {
    console.log('Previous button clicked');
  }

  const handlePlayPauseButtonClick = () => {
    console.log('Play/Pause button clicked');
  }
  

 const handleShuffleButtonClick = () => {
  // Random song from the songs array
    var currentSong = songs[Math.floor(Math.random() * songs.length)];
    console.log('Shuffle button clicked');
    console.log(currentSong)
  }

  
    return (
    <div>
      <h1>Music Player</h1>
        <AlbumArt />
        <p>Now playing <br /> <b>{currentSong}</b></p>
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