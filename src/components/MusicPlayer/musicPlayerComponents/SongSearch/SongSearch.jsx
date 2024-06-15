
function SongSearch({ data, addSongToQueue }) {

  const songList = data.map((song) => {
    return (
      <li>
        <a onClick={() => { onAddSong(song) }}>

          {song.title}
          <button onClick={() => { onAddSong(song) }}>
            <i className="fa-solid fa-plus" ></i>
          </button>

        </a>
      </li>
    );
  });

  const onAddSong = (song) => {
    addSongToQueue(song);
  }

  return (
    <div id='SongSearchContainer'>
      <input type='text' placeholder='Search for a song' />
      <button>Search</button>
      {songList}
    </div>
  );
}

function addSongToQueue(song) {
  console.log('Song added to queue:', song);
}

export default SongSearch;