import { useState} from 'react';
import MediaInterface from './musicPlayerComponents/MediaInterface/MediaInterface.jsx';
import SongQueue from './musicPlayerComponents/SongQueue/SongQueue.jsx';
import AlbumArt from './musicPlayerComponents/AlbumArt/AlbumArt.jsx';

function MusicPlayer() {
  const songs = [
    'Something - Remastered 2009 - The Beatles',
    'Hey Jude - Remastered 2015 - The Beatles',
    'Let It Be - Remastered 2009 - The Beatles',
    'Help! - Remastered 2009 - The Beatles',
    'Yesterday - Remastered 2009 - The Beatles',
    'Come Together - Remastered 2009 - The Beatles',
    'Twist And Shout - Remastered 2009 - The Beatles',
    'I Want To Hold Your Hand - Remastered 2015 - The Beatles',
    'A Hard Day\'s Night - Remastered 2009 - The Beatles',
    'Can\'t Buy Me Love - Remastered 2009 - The Beatles',
    'Love Me Do - Remastered 2009 - The Beatles',
    'Penny Lane - Remastered 2009 - The Beatles',
    'Yellow Submarine - Remastered 2009 - The Beatles'
  ]
  
  const [currentSong, setCurrentSong] = useState('Something - Remastered 2009 - The Beatles');
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
    console.log('Now playing:', prevSong);
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
        <SongQueue queuedSongs={queuedSongs} setQueuedSongs={setQueuedSongs} setNowPlaying={setNowPlaying}/>
    </div>
  );
}

export default MusicPlayer;