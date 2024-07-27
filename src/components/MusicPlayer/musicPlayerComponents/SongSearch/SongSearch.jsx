import { useState, useEffect } from 'react';
import setNowPlaying from '../MediaInterface/MediaInterface';
import './SongSearch.css';
import api from '../../../../utils/apiHandling';

function SongSearch({ addSongToQueue }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [songList, setSongList] = useState([]);
  const [rawSongList, setRawSongList] = useState([]);

  const genSongList = (songData) => {
    const onAddSong = (song) => {
      addSongToQueue(song);
    }
    
    const onTitleClick = (song) => {
      setNowPlaying(song);
    }

    return songData.map((song, index) => (
      <li id="songListItems" key={index} >
        <a href='#' onClick={() => { onTitleClick(song) }}>
          {song.artist} - {song.title}
        </a>
        <button id="songListItems-addItem" onClick={() => { onAddSong(song) }}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </li>
    ));
  };

  const filterSongs = () => {
    if (searchTerm === "") {
      setSongList(genSongList(rawSongList));
      return;
    }

    const filteredSongs = rawSongList.filter((song) => {
      const matchTitle = song.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchArtist = song.artist.toLowerCase().includes(searchTerm.toLowerCase());
      const matchAlbum = song.album.toLowerCase().includes(searchTerm.toLowerCase());
      const matchGenre = song.genre.toLowerCase().includes(searchTerm.toLowerCase());

      if (matchTitle || matchArtist || matchAlbum || matchGenre) {
        return true;
      }

      return false;
    });

    setSongList(genSongList(filteredSongs));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getSongList = async () => {
      const songs = await api.listSongs();
      setRawSongList(songs);
      setSongList(genSongList(songs));
    };

    getSongList();
  }, []);

  useEffect(() => {
    if (songList.length > 0) {
      filterSongs();
    }
  }, [searchTerm, songList]);

  return (
    <>
      <input id='songSearch' type='text' placeholder='Search for a song / genre / album' value={searchTerm} onChange={handleSearchChange} />
      <div id='SongSearchList'>
        {songList}
      </div>
    </>
  );
};

export default SongSearch;
