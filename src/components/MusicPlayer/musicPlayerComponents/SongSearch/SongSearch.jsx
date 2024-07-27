import { useState, useEffect } from 'react';
import './SongSearch.css';
import api from '../../../../utils/apiHandling';

function SongSearch({ addSongToQueue }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [songList, setSongList] = useState([]);
  const [rawSongList, setRawSongList] = useState([]);

  const genSongList = (songData) => {
    return songData.map((song) => {
      return (
        <li id="songListItems" key={`${song.id}-${song.listkey}`}>
          <a href='#' onClick={() => { addSongToQueue(song) }} >
            {song.artist} - {song.title}
          </a>
          <button id="songListItems-addItem" onClick={() => { addSongToQueue(song) }}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </li>
      );
    });
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
      filterSongs();
    };

    getSongList();
    console.log("Initial Search List Load")
  }, []);

  return (
    <>
      <input id='songSearch' type='text' placeholder='Search for a song / genre / album' value={searchTerm} onChange={handleSearchChange} />

      {
        // re-render song list when search term changes
        useEffect(() => {
          filterSongs();
        }, [rawSongList, searchTerm])
      }

      <div id='SongSearchList'>
        {songList}
      </div>
    </>
  );
};

export default SongSearch;
