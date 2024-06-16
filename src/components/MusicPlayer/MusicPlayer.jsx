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

  const [isPlaying, setIsPlaying] = useState(false);
       
  const emptySong = {
    songId: '',
    title: 'No Song Playing',
    artist: '',
    album: '',
    genre: ''
  };

  const setNowPlaying = (song) => {
    if (song === undefined || song.title === 'No Song Playing') {
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
      createNotification(`Now playing: ${prevSong.title}`, 'info');
    }

    console.log('Song history After Previous Button Click:', songHistory);

  }

  const handlePlayPauseButtonClick = () => {
    const audioElement = document.getElementById('audioElement');
    if (audioElement.paused) {
      audioElement.play();
      console.log('Audio is playing');
      setIsPlaying(true);
    } else {
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

  const handleProgressBarChange = (event) => {
    const currentTime = event.target.value;
    const audioElement = document.getElementById('audioElement');
    audioElement.currentTime = currentTime;
  };

  const audioDuration = () => {
    const audioElement = document.getElementById('audioElement');
    const duration = audioElement.duration;
    console.log(duration)
    return duration;
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
              min={0}
              max={100}
              value={currentSong.currentTime}
              onChange={handleProgressBarChange}
            />
            
            <audio id="audioElement" controls autoPlay src={'https://file-explorer-s3-bucket.s3.us-west-1.amazonaws.com/03.%20MERMAID.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJGMEQCIAo32kzLnK%2BkhKy2t32Nciyelw%2FrmzxIy4CdqTQmFdafAiB74AylSJI%2Bc49IhmdA%2FGfQ%2Fi9X9g48dRUHLdFA4kVXJSrxAgjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDM0OTY1NDA3ODM4OSIMNgV1ufMgAw7f7wePKsUCiZLs9aKyjuZL0BE6r0LtO26Qe7ESVOQwrn%2BKbKortK4BR9f5WP849gBRYtjM04yQdxjc0NNU1Vlmx9UMJraAdKInnJ3sHZCd7XB5PDw7TlFIsk6KY1cfhjGbdCcLKHzCmxq%2BguqexmkK9Aq6MOLf0HsVu4RM1JystIP6S%2BDrFjXqnl7yBa50MYITKukuKQ%2FKSm8tMMbWM5Xe%2Bb5G5QFn0%2FIjdXmTF4V3MGYQxFlwCV5XGKAXn%2FwGksv2DRAQgqWgd%2B8EGFSAlj6qeKeOXSUoA3TYxOp2jKFw3yH0edEGNGjtiyOTMTfEfLG0AH%2BluguzZSqwRMsKMNfHhC21OQm8smDWXFbLzYQCSiDvn8aqeVVnu48Ar985Ji1FWNj0ryt%2B8ROaE268CYdqINjNooat2UFMsufcLf8rkApx2NQatDF1Fi%2BqSTDZ57azBjq0AsGDt5AOmBC%2FXqUw4pErcshrnwv7IYt5JYt9Bir7BgC75s8%2BJ5TY%2FTfQ%2F5ZXnLvFXS39XfRKH04kPL9U1FmlIw4QaDK0FeBztg4nr7j46DGT1odbLZGKZmIk5Z3fqYR%2BbCweZzBcOYT0zzyEsGvgKaTfxtlPL73gtAdE%2BkpbaH4L%2F1FEdqEuVo3RrxCBYvGD1qf5n8dsnURO4g%2FKNkmLizy1v5t2aDMAXXiXsqMgcQuoo%2B1Q6GvQR%2F09XiZpOKfRV0PGcyO%2FoU%2ByIuen9gF%2F7ovbVDle7sG6txkF8YYI%2FQ75yp%2F%2B59z54oBRgAI7EeOy85%2BK3iTrGzEjEoSMzJPptzpOeKBC4wFxaLsuTcb21D404OLE2JBZ6vk8%2BbbA2a838z8kaoW8QP58czh7U7OrK0hJV6iD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240615T153307Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAVC2IB2O23UZ4NTZ7%2F20240615%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=fb874c3f23471bf2b18da2d5b7f0021b3ee105a7e75875353e50e34427ff1313'} />
            <MediaInterface
              previousButtonClick={handlePreviousButtonClick}
              playPauseButtonClick={ handlePlayPauseButtonClick }
              isPlaying={isPlaying}
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