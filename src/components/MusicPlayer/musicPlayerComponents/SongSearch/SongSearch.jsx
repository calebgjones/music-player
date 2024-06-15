import React from 'react';
import setNowPlaying from '../MediaInterface/MediaInterface';

function SongSearch({ data, addSongToQueue }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredSongs = data.filter((song) => {
    return song.title.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const onAddSong = (song) => {
    addSongToQueue(song);
  }
  
  const songList = filteredSongs.map((song, index) => (
    <li key={index}>
      <a style={{textDecoration: 'none'}} href='#' onClick={() => { setNowPlaying(song) }}>
        {song.artist} - {song.title}
      </a>
      <button onClick={() => { onAddSong(song) }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </li>
  ));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div id='SongSearchContainer'>
      <input type='text' placeholder='Search for a song' value={searchTerm} onChange={handleSearchChange} />
      <button>Search</button>
      {songList}
    </div>
  );
}

function addSongToQueue(song) {
  console.log('Song added to queue:', song);
}

export default SongSearch;