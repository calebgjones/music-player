import { useState } from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';
import SongSearch from './musicPlayerComponents/SongSearch/SongSearch.jsx';

import songs from './songs.js';

function MusicPlayer({ createNotification }) {

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [queuedSongs, setQueuedSongs] = useState(songs);
  const [songHistory, setSongHistory] = useState([]);
  const indexOfCurrentSong = queuedSongs.indexOf(currentSong);    // Find the index of the current song

  const emptySong = {
    songId: '',
    title: 'No Song Playing',
    artist: '',
    album: '',
    genre: ''
  };

  const setNowPlaying = (song) => {
    if (song === undefined) {
      return;
    } else {
    setSongHistory([...songHistory, currentSong]);
    queuedSongs.slice(indexOfCurrentSong, 1);
    setCurrentSong(song);
    createNotification(`Now playing: ${song.title}`, 'info');
    }
  };

  const addSongToQueue = (song) => {
    setQueuedSongs([...queuedSongs, song]);
    createNotification(`Song added to queue: ${song.title}`, 'success');
  }
  
  const handleNextButtonClick = async () => {
    if (queuedSongs[0] === undefined) {
      setCurrentSong(emptySong);
      console.log('End of queue');
      return;
    }
    setNowPlaying(emptySong);
    const updatedQueue = queuedSongs.slice(1);    // Remove the first song from the queue
    setNowPlaying(updatedQueue[0]);   // Update the currentSong state with the next song
  
    setQueuedSongs(updatedQueue); // Update the queuedSongs state with the updated queue
  
    console.log('Song history After Next Button Click:', songHistory[0]);
  };

  const handlePreviousButtonClick = () => {
    const prevSong = songHistory[songHistory.length - 1];
    const prevSongExists = prevSong === undefined ? false : true;

    if (!prevSongExists) {
      console.log('No previous song in history');
    } else {
      setCurrentSong(prevSong);
      setQueuedSongs([prevSong, ...queuedSongs]);
      setSongHistory(songHistory.slice(0, -1));
    }

    console.log('Song history After Previous Button Click:', songHistory);

  }

  const handlePlayPauseButtonClick = () => {
    console.log('Play/Pause button clicked');
  }

  const handleShuffleButtonClick = () => {
    const shuffleSongs = () => {
      const shuffledSongs = [...queuedSongs];
      for (let i = shuffledSongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
      }
      setNowPlaying(shuffledSongs[0]);
      setQueuedSongs(shuffledSongs);
    }

    shuffleSongs();
  }


  return (
    <>
      <title>{`Playing: ${currentSong.title}`}</title>
      <div id="musicPlayerContainer">

        <div className='musicPlayerGrid'>
          <div id="musicPlayerBox">
            <h1>Music Player</h1>
            <AlbumArt />
            <p>Now playing <br /> <b>{currentSong.title}</b></p>
            <p>Artist: {currentSong.artist}</p>
            <progress value={0.8} />
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
          <SongSearch data={songs} addSongToQueue={addSongToQueue}/>
        </div>


      </div>
    </>
  );
}

export default MusicPlayer;