import { useState } from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';
import SongSearch from './musicPlayerComponents/SongSearch/SongSearch.jsx';

import songs from './songs.js';

function MusicPlayer() {
  
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [queuedSongs, setQueuedSongs] = useState(songs);
  const indexOfCurrentSong = queuedSongs.indexOf(currentSong);    // Find the index of the current song

  const setNowPlaying = (song) => {
    if (song === currentSong) {
      return;
    } else {
      setCurrentSong(song);
    }
  }

  const handleNextButtonClick = () => {
    
    // Move to the next song in the array
    const nextIndex = (indexOfCurrentSong + 1) % queuedSongs.length;
    const nextSong = queuedSongs[nextIndex];
    
    // Update the currentSong state with the next song
    setCurrentSong(nextSong);

    // Update the currently playing song
    console.log('Now playing:', nextSong);
  }

  const handlePreviousButtonClick = () => {
    // Move to the next song in the array
    const prevIndex = (indexOfCurrentSong - 1) % queuedSongs.length;
    const prevSong = queuedSongs[prevIndex];

    if (queuedSongs.indexOf(prevSong) < 0) {
      console.log('No previous song in queue');
    } else {
    // Update the currentSong state with the previous song
    setCurrentSong(prevSong);

    // Update the currently playing song
    console.log('Now playing:', prevSong.title);
    console.log('Array index #:' + queuedSongs.indexOf(prevSong));
    }
  }

  const handlePlayPauseButtonClick = () => {
    console.log('Play/Pause button clicked');
  }
  
 const handleShuffleButtonClick = () => {
  const currentSongValue = currentSong;

  var randSong = songs[Math.floor(Math.random() * songs.length)];

    if (currentSongValue === randSong) {
      console.log('Song is already playing');
    } else {
      setCurrentSong(randSong);
      console.log('Now playing:', randSong);
    }
  }

  
    return (
      <>

      <div id="musicPlayerContainer">

        <div className='musicPlayerGrid'>
          <div id="musicPlayerBox">
            <h1>Music Player</h1>
            <AlbumArt />
            <p>Now playing <br /> <b>{currentSong.title}</b></p>
            <p>Artist: {currentSong.artist}</p>
            <MediaInterface
              previousButtonClick={handlePreviousButtonClick}
              playPauseButtonClick={handlePlayPauseButtonClick}
              nextButtonClick={handleNextButtonClick}
              shuffleButtonClick={handleShuffleButtonClick}
            />
          </div>
          <div id="musicPlayerBox">
            <SongQueue queuedSongs={queuedSongs} setQueuedSongs={setQueuedSongs} setNowPlaying={setNowPlaying} />
          </div>
        </div>
        
        <div id='searchBox'>
          <SongSearch />
        </div>


      </div>
    </>
  );
}

export default MusicPlayer;