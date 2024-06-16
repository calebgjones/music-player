import React from 'react';
import setNowPlaying from '../MediaInterface/MediaInterface';
import './SongSearch.css';

// Search for any term within the songs data
function SongSearch({ data, addSongToQueue }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredSongs = data.filter((song) => {
    const matchTitle = song.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchArtist = song.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchAlbum = song.album.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = song.genre.toLowerCase().includes(searchTerm.toLowerCase());

    if (matchTitle || matchArtist || matchAlbum || matchGenre) {
      return true;
      
    }

    return false;
  });

  const songList = filteredSongs.map((song, index) => (
      <li id="songListItems" key={index} >
        <a href='#' onClick={() => { setNowPlaying(song) }}>
          {song.artist} - {song.title}
        </a>
        <button id="songListItems-addItem" onClick={() => { onAddSong(song) }}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </li>
    ));
  
    const onAddSong = (song) => {
      addSongToQueue(song);
    }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div id='SongSearchList'>
      <input id='songSearch' type='text' placeholder='Search for a song / genre / album' value={searchTerm} onChange={handleSearchChange} />
      {songList}
    </div>
  );
}

function addSongToQueue(song) {
  console.log('Song added to queue:', song);
}

export default SongSearch;