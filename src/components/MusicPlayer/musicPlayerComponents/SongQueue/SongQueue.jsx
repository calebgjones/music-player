
function SongQueue({ queuedSongs, setQueuedSongs, setNowPlaying }) {

  const onRemove = (song) => {
    const newQueue = queuedSongs.filter((queuedSong) => queuedSong !== song);
    setQueuedSongs(newQueue);
  }

  const onQueuedSongClick = (song) => {
    setNowPlaying(song);
  }

  const discIcon = <i className="fa-solid fa-compact-disc"></i>;

  return (
    <div id='songQueueContainer'>
      <h2>Song Queue</h2>
      <ul id='songQueue'>
        {queuedSongs.map((song) => (
          <li key={song.index}>
            <a onClick={( ) => { onQueuedSongClick(song) }} >{discIcon} {song.title}</a>
            <button onClick={() => { onRemove(song) }} ><i className="fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongQueue;