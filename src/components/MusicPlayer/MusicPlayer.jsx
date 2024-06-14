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


  const handleNextButtonClick = () => {
    // Find the index of the current song
    const currentIndex = queuedSongs.indexOf(currentSong);
    
    // Move to the next song in the array
    const nextIndex = (currentIndex + 1) % queuedSongs.length;
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
        <p>Now playing <br /> <b>{currentSong}</b></p>
        <MediaInterface 
            previousButtonClick={ handlePreviousButtonClick } 
            playPauseButtonClick={ handlePlayPauseButtonClick } 
            nextButtonClick={ handleNextButtonClick } 
            shuffleButtonClick={ handleShuffleButtonClick }
        />
        <SongQueue queuedSongs={queuedSongs} setQueuedSongs={setQueuedSongs}/>
    </div>
  );
}

export default MusicPlayer;