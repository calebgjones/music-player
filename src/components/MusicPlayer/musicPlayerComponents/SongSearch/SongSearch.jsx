
function SongSearch({ addSongToQueue, setNowPlaying }) {

  const onAddSong = (song) => {
    addSongToQueue(song);
  }

  const onQueuedSongClick = (song) => {
    setNowPlaying(song);
  }


  return (
    <div id='SongSearchContainer'>
      <input type='text' placeholder='Search for a song' />
      <button>Search</button>
      <ul id='songSearchResults'>
        <li>
          <a onClick={() => { onAddSong('Song 1') }}>Song 1</a>
        </li>
        <li>
          <a onClick={() => { onAddSong('Song 2') }}>Song 2</a>
        </li>
        <li>
          <a onClick={() => { onAddSong('Song 3') }}>Song 3</a>
        </li>
      </ul>
    </div>
  );
}

export default SongSearch;