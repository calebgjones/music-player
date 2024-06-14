
function SongQueue({ queuedSongs }) {
  const songs = ['song1', 'song2', 'song3', 'song4', 'song5'];

  return (
    <div>
      <h2>Song Queue</h2>
      <ul>
        {songs.map((song) => (
          <li key={song}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default SongQueue;