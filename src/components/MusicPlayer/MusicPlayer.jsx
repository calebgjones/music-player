import { useState} from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';
import SongSearch from './musicPlayerComponents/SongSearch/SongSearch.jsx';

import songs from './songs.js';

function MusicPlayer() {

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [queuedSongs, setQueuedSongs] = useState(songs);

  const setNowPlaying = (song) => {
    if (song === currentSong) {
      return;
    } else {
      setCurrentSong(song);
    }
  }


  const handleNextButtonClick = () => {
    const indexOfCurrentSong = queuedSongs.indexOf(currentSong);    // Find the index of the current song
    
    // Move to the next song in the array
    const nextIndex = (indexOfCurrentSong + 1) % queuedSongs.length;
    const nextSong = queuedSongs[nextIndex];
    
    // Update the currentSong state with the next song
    setCurrentSong(nextSong);

    // Update the currently playing song
    console.log('Next button clicked');
    console.log('Now playing:', nextSong);
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
        <p>Now playing <br /> <b>{currentSong.title}</b></p>
        <p>Artist: {currentSong.artist}</p>
        <MediaInterface 
            previousButtonClick={ handlePreviousButtonClick } 
            playPauseButtonClick={ handlePlayPauseButtonClick } 
            nextButtonClick={ handleNextButtonClick } 
            shuffleButtonClick={ handleShuffleButtonClick }
        />
        <SongQueue queuedSongs={queuedSongs} setQueuedSongs={setQueuedSongs} setNowPlaying={setNowPlaying}/>
        <SongSearch addSongToQueue={setQueuedSongs} setNowPlaying={setNowPlaying}/>
    </div>
  );
}

export default MusicPlayer;