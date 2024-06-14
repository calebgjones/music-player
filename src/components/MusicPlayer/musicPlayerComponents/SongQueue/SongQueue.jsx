
function SongQueue({ queuedSongs, setQueuedSongs, setNowPlaying }) {

  const onRemove = (song) => {
    const newQueue = queuedSongs.filter((queuedSong) => queuedSong !== song);
    setQueuedSongs(newQueue);
  }

  const onQueuedSongClick = (song) => {
    setNowPlaying(song);
  }

  const discIcon = <i class="fa-solid fa-compact-disc"></i>;

  return (
    <div id='songQueueContainer'>
      <h2>Song Queue</h2>
      <ul id='songQueue'>
        {queuedSongs.map((song) => (
          <li key={song}>
            <a onClick={( ) => { onQueuedSongClick(song) }} key={song}>{discIcon}{song}</a>
            <button onClick={() => { onRemove(song) }} ><i class="fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongQueue;