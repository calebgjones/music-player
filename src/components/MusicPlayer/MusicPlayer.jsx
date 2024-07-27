import { useState } from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';
import SongSearch from './musicPlayerComponents/SongSearch/SongSearch.jsx';
import UploadFileModal from './musicPlayerComponents/Modals/UploadFileModal/UploadFileModal.jsx';

import songs from './songs.js';

function MusicPlayer({ createNotification }) {

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [queuedSongs, setQueuedSongs] = useState(songs);
  const [songHistory, setSongHistory] = useState([]);
  const [getCurrentTime, setCurrentTime] = useState(0);
  const indexOfCurrentSong = queuedSongs.indexOf(currentSong);    // Find the index of the current song

  const [isPlaying, setIsPlaying] = useState(false);


  const emptySong = {
    songId: '',
    title: '',
    artist: '',
    album: '',
    genre: ''
  };


  const addSongToQueue = (song) => {
    if (queuedSongs.includes(song)) {
      return;
    } else {
    setQueuedSongs([...queuedSongs, song]);
    }
  }
  
  const handleNextButtonClick = async () => {
    if (queuedSongs[1] === undefined || queuedSongs[1].title === 'No Song Playing') {
      setCurrentSong(emptySong);
      queuedSongs.pop(0);
      console.log('End of queue');
      return;
    }
    const updatedQueue = queuedSongs.slice(1);    // Remove the first song from the queue
    setNowPlaying(updatedQueue[0]);   // Update the currentSong state with the next song
  
    setQueuedSongs(updatedQueue); // Update the queuedSongs state with the updated queue
  
    console.log('Song history After Next Button Click:', queuedSongs[1]);
  };

  const handlePreviousButtonClick = () => {
    const prevSong = songHistory[songHistory.length - 1];
    const prevSongExists = prevSong === undefined || queuedSongs.title === 'No Song Playing' ? false : true;

    if (!prevSongExists) {
      console.log('No previous song in history');
    } else {
      setCurrentSong(prevSong);
      setQueuedSongs([prevSong, ...queuedSongs]);
      setSongHistory(songHistory.slice(0, -1));
      createNotification(`Now playing: ${prevSong.title}`, 'info');
    }

    console.log('Song history After Previous Button Click:', songHistory);

  }

  const setNowPlaying = (song) => {
    if (song === undefined || song.title === 'No Song Playing') {
      console.log('wtf');
      return;
    } else {
    setSongHistory([...songHistory, currentSong]);
    queuedSongs.slice(indexOfCurrentSong, 0);
    setCurrentSong(song);
    createNotification(`Now playing: ${song.title}`, 'info');
    }
  };

  const handlePlayPauseButtonClick = () => {
    const audioElement = document.getElementById('audioElement');
    if (audioElement.paused) {
      audioElement.play().catch(error => {
        console.log('Error playing audio:', error);
      });
      console.log('Audio is playing');
      setIsPlaying(true);
    } else if (!audioElement.ended && !audioElement.paused) {
      audioElement.pause();
      console.log('Audio is paused');
      setIsPlaying(false);
    }
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

  const audioDuration = () => {
    const audioElement = document.getElementById('audioElement');
    const duration = audioElement.duration;
    console.log(duration)
    return duration;
  }

  const handleProgressBarChange = (event) => {
    const currentTime = event.target.value;
    const audioElement = document.getElementById('audioElement');
    audioElement.currentTime = currentTime;
    setCurrentTime(getCurrentTime);
  };

  const handleUploadButtonClick = () => {
    const uploadBoxContainer = document.getElementById('uploadBoxContainer');
    const uploadBox = document.getElementById('uploadBox');
    const uploadBoxForm = document.getElementById('uploadBoxForm');
    console.log('Upload button clicked');
    uploadBoxContainer.style.display = 'flex';
    uploadBoxForm.style.display = 'flex';
    uploadBox.style.display = 'flex';
    console.log(uploadBox.style.display);
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

            <input
              type="range"
              value={getCurrentTime}
              min={0}
              //max={audioDuration}
              onChange={handleProgressBarChange}
            />

            <audio id="audioElement" controls src={'https://music-player-bucket-test.s3.us-west-1.amazonaws.com/1f70779e-96c0-4473-aa58-a77b1ef7b920?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVC2IB2O2QHLDIUGL%2F20240725%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240725T042051Z&X-Amz-Expires=3600&X-Amz-Signature=aaab999d5e448d9cc091105d27a0d1046daebc3d5e1ab7be75fb9bf1ff178156&X-Amz-SignedHeaders=host&x-id=GetObject'} />
            <MediaInterface
              previousButtonClick={handlePreviousButtonClick}
              playPauseButtonClick={ handlePlayPauseButtonClick }
              isPlaying={isPlaying}
              nextButtonClick={handleNextButtonClick}
              shuffleButtonClick={handleShuffleButtonClick}
              uploadButtonClick={handleUploadButtonClick}
            />
          </div>
          <div id="songQueueBox">
            <SongQueue queuedSongs={queuedSongs} setQueuedSongs={setQueuedSongs} setNowPlaying={setNowPlaying} />
          </div>
        </div>
      </div>
      <div id='searchBoxContainer'>
        <div id='searchBox'>
          <SongSearch data={songs} addSongToQueue={addSongToQueue}/>
        </div>
      </div>
      <div id='uploadBoxContainer'>
        <div id='uploadBox'>
          <UploadFileModal />
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;