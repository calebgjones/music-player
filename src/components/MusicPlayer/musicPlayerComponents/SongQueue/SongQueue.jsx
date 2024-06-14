import MusicPlayer from "../../MusicPlayer";

export const songs = [
  'Something - Remastered 2009 - The Beatles',
  'Hey Jude - Remastered 2015 - The Beatles',
  'Let It Be - Remastered 2009 - The Beatles',
  'Help! - Remastered 2009 - The Beatles',
  'Yesterday - Remastered 2009 - The Beatles',
  'Come Together - Remastered 2009 - The Beatles',
  'Twist And Shout - Remastered 2009 - The Beatles',
  'I Want To Hold Your Hand - Remastered 2015 - The Beatles',
  'A Hard Day\'s Night - Remastered 2009 - The Beatles',
  'Can\'t Buy Me Love - Remastered 2009 - The Beatles',
  'Love Me Do - Remastered 2009 - The Beatles',
  'Penny Lane - Remastered 2009 - The Beatles',
  'Yellow Submarine - Remastered 2009 - The Beatles'
];

function SongQueue({ queuedSongs }) {
  return (
    <div id='songQueueContainer'>
      <h2>Song Queue</h2>
      <ul id='songQueue'>
        {songs.map((song) => (
          <li key={song}>
          <a href="" key={song}>{song}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongQueue;