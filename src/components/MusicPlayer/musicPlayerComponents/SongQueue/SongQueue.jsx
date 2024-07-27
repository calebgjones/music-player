import { useEffect, useState } from 'react';

function SongQueue({ removeSongFromQueue, queuedSongs, onQueuedSongClick }) {
  const [queuedSongsList, setQueuedSongsList] = useState([]);

  const renderQueuedSongs = (queuedSongs) => {
    const renderedSongs = queuedSongs.map((song) => (
      <li key={song.listkey}>
        <a onClick={() => { onQueuedSongClick(song) }} >{song.title}</a>
        <button id="songQueue-removeSong" onClick={() => { removeSongFromQueue(song) }} ><i className="fa-solid fa-trash"></i></button>
      </li>
    ));

    setQueuedSongsList(renderedSongs);
  };

  return (
    <div id='songQueueContainer'>
      {
          useEffect(() => {
            renderQueuedSongs(queuedSongs);
          }, [queuedSongs])
      }
      <h2>Song Queue</h2>
      <ul id='songQueue'>
        {queuedSongsList}
      </ul>
    </div>
  );
}

export default SongQueue;
